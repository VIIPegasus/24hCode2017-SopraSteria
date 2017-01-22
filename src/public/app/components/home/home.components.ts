import { Component } from '@angular/core';
import {NG2_PHASER}  from '../../../node_modules/ang2-phaser/ng2phaser'
import { Joueur } from '../1024/joueur'
import { Synthese } from '../1024/model/synthese'
import { CarteMappy } from '../1024/model/carte-mappy/carte-mappy'
import { PagesJaunes } from '../1024/model/magasin/pages-jaunes.service'

declare var __phaser:any;

@Component({
  selector: 'my-app',
  directives: [
    NG2_PHASER
  ],
  template: `
    <center>
      <h1>Angular2 - 1024</h1>
      <phaser (phaser)="phaserLink1($event)" ></phaser>
    </center>
  `
})
export class HomeComponent {

  //---------------
    phaserLink1(phaser:any){
        var premierJoueur = new Joueur;
        premierJoueur.nom = 'Clark Kent';

        var map = new CarteMappy;
        let c = (new PagesJaunes as any).queryPagesJaunes("garage","48.0042991","0.1997244");

        var syntheseJeu = new Synthese;
        syntheseJeu.setJoueur(premierJoueur);
        syntheseJeu.setCarte(map);

        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = '../../../1024Game/1024.js';
        document.body.appendChild(js);
        js.onload = function() {
            __phaser.game.init(phaser.container, this, syntheseJeu);
        }
    }
  //---------------

  //---------------
  destroyGame(){
     __phaser.destroyGame(function(){
           // do something
     });
  }
  //---------------

  //---------------
  ngOnDestroy() {
    this.destroyGame();
  }
  //---------------


}
