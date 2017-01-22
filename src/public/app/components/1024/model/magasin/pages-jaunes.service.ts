import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Magasin} from './magasin'

@Injectable()
export class PagesJaunes {

    constructor() {
    }

    public obtenirListeMagasins(lat: string, lon: string) : Array<Magasin> {
        let result = this.queryPagesJaunes("garage","48.0042991","0.1997244");
        console.log("resultQuery");
        console.log(result);

        // Do magic

        return result;
    }


    queryPagesJaunes(type: string, lat: string, lon: string) : Array<Magasin> {
        var result = new Array<Magasin>();
        var headers = {
            "Accept": "application/json"
        };
        var baseUrl = "https://api.apipagesjaunes.fr/pros/find.json";
        var urlArgs = "what=" + type + "&where=cZ" + lon + "," + lat + "&proximity=true";

        console.log(baseUrl + urlArgs);
        var a = new Magasin;
        result.push(a.test());

        /*
        this.http.get(baseUrl + "?" + urlArgs)
        .map(res => res.json())
        .subscribe(data => {
          result = data;
      });*/

        return result;
    }
}
