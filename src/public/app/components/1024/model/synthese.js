"use strict";
var etat_anormal_1 = require("./etat/etat-anormal");
var deck_1 = require("./cards/deck");
var Synthese = (function () {
    function Synthese() {
    }
    Synthese.prototype.start = function () {
    };
    Synthese.prototype.setJoueur = function (j) {
        this.joueur = j;
    };
    Synthese.prototype.setCarte = function (a) {
        this.carte = a;
    };
    Synthese.prototype.estImmobilise = function () {
        var etatVoiture = this.joueur.etat.etatVoiture;
        var etatEssence = this.joueur.etat.etatEssence;
        var etatPneu = this.joueur.etat.etatPneu;
        if (etatVoiture == etat_anormal_1.EtatAnormal || etatEssence == etat_anormal_1.EtatAnormal || etatPneu == etat_anormal_1.EtatAnormal) {
            return true;
        }
        else {
            return false;
        }
    };
    Synthese.prototype.getVitesseMax = function () {
        return 0;
    };
    Synthese.prototype.obtenirPremiereMainJoueur = function () {
        var main = new deck_1.Deck();
        for (var i = 0; i < 6; i++) {
            main.addCard(this.deck_general.liste_carte.pop());
        }
        return main;
    };
    /**
     * Shuffles array in place.
     * @param {Array} a items The array containing the items.
     */
    Synthese.prototype.shuffle = function (a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    };
    return Synthese;
}());
exports.Synthese = Synthese;
//# sourceMappingURL=synthese.js.map