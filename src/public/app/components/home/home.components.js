"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ng2phaser_1 = require("../../../node_modules/ang2-phaser/ng2phaser");
var joueur_1 = require("../1024/joueur");
var synthese_1 = require("../1024/model/synthese");
var carte_mappy_1 = require("../1024/model/carte-mappy/carte-mappy");
var pages_jaunes_service_1 = require("../1024/model/magasin/pages-jaunes.service");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    //---------------
    HomeComponent.prototype.phaserLink1 = function (phaser) {
        var premierJoueur = new joueur_1.Joueur;
        premierJoueur.nom = 'Clark Kent';
        var map = new carte_mappy_1.CarteMappy;
        var c = (new pages_jaunes_service_1.PagesJaunes).queryPagesJaunes("garage", "48.0042991", "0.1997244");
        var syntheseJeu = new synthese_1.Synthese;
        syntheseJeu.setJoueur(premierJoueur);
        syntheseJeu.setCarte(map);
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = '../../../1024Game/1024.js';
        document.body.appendChild(js);
        js.onload = function () {
            __phaser.game.init(phaser.container, this, syntheseJeu);
        };
    };
    //---------------
    //---------------
    HomeComponent.prototype.destroyGame = function () {
        __phaser.destroyGame(function () {
            // do something
        });
    };
    //---------------
    //---------------
    HomeComponent.prototype.ngOnDestroy = function () {
        this.destroyGame();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        directives: [
            ng2phaser_1.NG2_PHASER
        ],
        template: "\n    <center>\n      <h1>Angular2 - 1024</h1>\n      <phaser (phaser)=\"phaserLink1($event)\" ></phaser>\n    </center>\n  "
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.components.js.map