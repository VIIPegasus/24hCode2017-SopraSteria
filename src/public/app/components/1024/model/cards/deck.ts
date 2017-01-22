import {Card} from './card'

export class Deck {
    liste_carte: Card[];

    constructor() {
        this.liste_carte = new Array<Card>();
    }

    addCard(card: Card) {
        this.liste_carte.push(card);
    }

    addMultiCard(card: Card, num: number) {
        for(var i = 0; i < num; i++) {
            this.liste_carte.push(card);
        }
    }
}
