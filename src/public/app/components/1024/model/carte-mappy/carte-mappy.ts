import {PagesJaunes} from '../magasin/pages-jaunes.service'
import {Magasin} from '../magasin/magasin'

export class CarteMappy {


    getListeDeMagasinsDisponible(lat: string, lon: string) : Array<Magasin> {
        var a = new Magasin;

        a.nom = "Garage Adam";
        a.type = "Garage";
        a.lat = "47.9965347";
        a.lon = "0.1934622";

        var result = new Array<Magasin>();
        result.push(a);

        return result;
    }

    positionInitiale() : {lat: string, lon: string} {
        let lat: "47.9965347";
        let lon: "0.1934622";

        return {lat, lon};
    }
}
