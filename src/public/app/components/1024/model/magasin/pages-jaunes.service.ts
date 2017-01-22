import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Magasin} from './magasin'

@Injectable()
export class PagesJaunes {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public obtenirListeMagasins(lat: string, lon: string) : Array<Magasin> {
        let result: Array<Magasin>;
        let a: Magasin;
        a = a.test();

        var resultQuery = this.queryPagesJaunes("garage","48.0042991","0.1997244");
        console.log("resultQuery");
        console.log(resultQuery);

        // Do magic
        result.push(a);

        return result;
    }


    queryPagesJaunes(type: string, lat: string, lon: string) : string {
        var result;
        var headers = {
            "Accept": "application/json"
        };
        var baseUrl = "https://api.apipagesjaunes.fr/pros/find.json";
        var urlArgs = "what=" + type + "&where=cZ" + lon + "," + lat + "&proximity=true";

        console.log(baseUrl + urlArgs);

        this.http.get(baseUrl + "?" + urlArgs)
        .map(res => res.json())
        .subscribe(data => {
          result = data;
        });

        console.log(result);

        return result;
    }
}
