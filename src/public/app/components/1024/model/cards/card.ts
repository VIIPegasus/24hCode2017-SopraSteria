import {TypeCard} from './type-card'

export class Card {
    nom: string;
    img: string;
    type: TypeCard;    // Spécifie le type de la carte : botte/parade/obstacle/carte de distance
    influence: string; // Spécifie ce que ça va modifier
    valeur: number;
}
