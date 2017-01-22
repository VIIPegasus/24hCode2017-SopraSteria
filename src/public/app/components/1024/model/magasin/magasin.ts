import {Deck} from '../cards/deck'

export class Magasin {
    nom: string;
    type: string;
    lat: string;
    lon: string;
    deck: Deck;

    test() : Magasin {
        let a : Magasin;

        a.nom = "Garage Adam";
        a.type = "Garage";
        a.lat = "47.9965347";
        a.lon = "0.1934622";

        return a;
    }
}
