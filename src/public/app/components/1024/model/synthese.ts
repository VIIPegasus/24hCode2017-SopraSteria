import {CarteMappy} from './carte-mappy/carte-mappy'
import {Joueur} from '../joueur'
import {EtatAnormal} from './etat/etat-anormal'
import {EtatInvincible} from './etat/etat-invincible'
import {EtatNormal} from './etat/etat-normal'

export class Synthese {
    carte: CarteMappy;
    joueur: Joueur;

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

}
