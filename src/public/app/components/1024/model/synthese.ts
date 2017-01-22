import {CarteMappy} from './carte-mappy/carte-mappy'
import {Joueur} from '../joueur'
import {EtatAnormal} from './etat/etat-anormal'
import {EtatInvincible} from './etat/etat-invincible'
import {EtatNormal} from './etat/etat-normal'
import {Deck} from './cards/deck'
import {Card} from './cards/card'

export class Synthese {
    carte: CarteMappy;
    joueur: Joueur;
    deck_general: Deck;

    start() {
    }

    setJoueur(j: Joueur) {
        this.joueur = j;
    }

    setCarte(a: CarteMappy) {
        this.carte = a;
    }

    estImmobilise() : boolean {
        var etatVoiture = this.joueur.etat.etatVoiture;
        var etatEssence = this.joueur.etat.etatEssence;
        var etatPneu = this.joueur.etat.etatPneu;

        if (etatVoiture == EtatAnormal || etatEssence == EtatAnormal || etatPneu == EtatAnormal) {
            return true;
        } else {
            return false;
        }
    }

    getVitesseMax() : number {
        return 0;
    }

    obtenirPremiereMainJoueur() : Deck {
        var main = new Deck();
        for(var i = 0; i < 6; i++) {
            main.addCard(this.deck_general.liste_carte.pop());
        }
        return main;
    }

    /**
     * Shuffles array in place.
     * @param {Array} a items The array containing the items.
     */
    shuffle(a: Array<Card>) : void {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }
}
