"use strict";
var etat_anormal_1 = require("./etat/etat-anormal");
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
    return Synthese;
}());
exports.Synthese = Synthese;
//# sourceMappingURL=synthese.js.map