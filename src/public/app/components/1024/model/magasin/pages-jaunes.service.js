"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var PagesJaunes = (function () {
    function PagesJaunes(http) {
        this.http = http;
    }
    PagesJaunes.prototype.obtenirListeMagasins = function (lat, lon) {
        var result = this.queryPagesJaunes("garage", "48.0042991", "0.1997244");
        console.log("resultQuery");
        console.log(result);
        // Do magic
        return result;
    };
    PagesJaunes.prototype.queryPagesJaunes = function (type, lat, lon) {
        var result = new Array();
        var headers = {
            "Accept": "application/json"
        };
        var baseUrl = "https://api.apipagesjaunes.fr/pros/find.json";
        var urlArgs = "what=" + type + "&where=cZ" + lon + "," + lat + "&proximity=true";
        console.log(baseUrl + urlArgs);
        var a;
        result.push(a.test());
        /*
        this.http.get(baseUrl + "?" + urlArgs)
        .map(res => res.json())
        .subscribe(data => {
          result = data;
      });*/
        return result;
    };
    return PagesJaunes;
}());
PagesJaunes = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PagesJaunes);
exports.PagesJaunes = PagesJaunes;
//# sourceMappingURL=pages-jaunes.service.js.map