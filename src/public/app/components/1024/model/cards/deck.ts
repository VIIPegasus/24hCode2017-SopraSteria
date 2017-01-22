import {Card} from './card'

export class Deck {
    liste_carte: Card[];

    addCard(card: Card) {
        this.liste_carte.push(card);
    }
}
