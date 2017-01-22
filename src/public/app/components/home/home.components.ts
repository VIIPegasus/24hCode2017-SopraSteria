import { Component } from '@angular/core';
import {NG2_PHASER}  from '../../../node_modules/ang2-phaser/ng2phaser'
import { Joueur } from '../1024/joueur'
import { Synthese } from '../1024/model/synthese'
import { CarteMappy } from '../1024/model/carte-mappy/carte-mappy'
import { PagesJaunes } from '../1024/model/magasin/pages-jaunes.service'
import { Deck } from '../1024/model/cards/deck'
import { Card } from '../1024/model/cards/card'

declare var __phaser:any;

@Component({
  selector: 'my-app',
  directives: [
    NG2_PHASER
  ],
  template: `
    <center>
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

        let c = new PagesJaunes();
        c.queryPagesJaunes("garage","48.0042991","0.1997244");

        var syntheseJeu = new Synthese;
        syntheseJeu.setJoueur(premierJoueur);
        syntheseJeu.setCarte(map);

        var listCards = new Deck();
        listCards.addMultiCard(new Card('', 'Distance', '', '25'), 10);

        listCards.addMultiCard(new Card('', 'Obstacle', '',  'Essence'), 3);
        listCards.addMultiCard(new Card('', 'Parade', '',  'Essence'), 6);
        listCards.addMultiCard(new Card('', 'Botte', '',  'Roue'), 1);
        listCards.addMultiCard(new Card('', 'Obstacle', '',  'Feu'), 5);
        listCards.addMultiCard(new Card('', 'Distance', '',  '100'), 12);
        listCards.addMultiCard(new Card('', 'Distance', '',  '75'), 10);
        listCards.addMultiCard(new Card('', 'Distance', '',  '50'), 10);
        listCards.addMultiCard(new Card('', 'Distance', '',  '200'), 4);

        listCards.addMultiCard(new Card('', 'Obstacle', '',  'Roue'), 3);
        listCards.addMultiCard(new Card('', 'Obstacle', '',  'Accident'), 3);
        listCards.addMultiCard(new Card('', 'Obstacle', '',  'Vitesse'), 4);

        listCards.addMultiCard(new Card('', 'Parade', '',  'Roue'), 6);
        listCards.addMultiCard(new Card('', 'Parade', '',  'Accident'), 6);
        listCards.addMultiCard(new Card('', 'Parade', '',  'Vitesse'), 6);
        listCards.addMultiCard(new Card('', 'Parade', '',  'Feu'), 14);

        listCards.addMultiCard(new Card('', 'Botte', '',  'Essence'), 1);
        listCards.addMultiCard(new Card('', 'Botte', '',  'Accident'), 1);
        listCards.addMultiCard(new Card('', 'Botte', '',  'Feu&Vitesse'), 1);
        syntheseJeu.shuffle(listCards.liste_carte);
        syntheseJeu.deck_general = listCards;
        premierJoueur.main = syntheseJeu.obtenirPremiereMainJoueur();

        var js = document.createElement("script");
        js.type = "text/javascript";
		js.src = '../../../gameDemo/game_card.js';
        //js.src = '../../../1024Game/1024.js';
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
