import {CarteMappy} from './carte-mappy/carte-mappy'
import {Joueur} from '../joueur'

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



}
