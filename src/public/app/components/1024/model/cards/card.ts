import {TypeCard} from './type-card'

export class Card {
    nom: string;
    img: string;
    type: string;
    influence: string;
    valeur: string;

    constructor(nom: string,  type: string,      influence: string,    valeur: string) {
        this.nom = nom;
        this.img = 'Carte'+type+valeur;
        this.type = type;
        this.influence = influence;
        this.valeur = valeur;
    }
}
