import {Deck} from './model/cards/deck'

export class Joueur {
    nom: string;
    carte_jouees: number[];
    position_latitude: string;
    position_longitude: string;
    etat: {etatEssence: Object, etatPneu: Object, etatVoiture: Object, etatVitesse: Object};
    avancement: number;
    main: Deck;
}
