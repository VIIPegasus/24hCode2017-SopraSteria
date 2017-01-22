import { Component } from '@angular/core';
import {NG2_PHASER}  from '../../../node_modules/ang2-phaser/ng2phaser'
import { Joueur } from '../1024/joueur'

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

     var js = document.createElement("script");
         js.type = "text/javascript";
		 js.src = '../../../gameDemo/game_card.js';
         //js.src = '../../../1024Game/1024.js';
         document.body.appendChild(js);
         js.onload = function(){
            __phaser.game.init(phaser.container, this, premierJoueur);
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
