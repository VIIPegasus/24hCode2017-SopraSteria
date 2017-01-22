"use strict";
var Card = (function () {
    function Card(nom, type, influence, valeur) {
        this.nom = nom;
        this.img = 'Carte' + type + valeur;
        this.type = type;
        this.influence = influence;
        this.valeur = valeur;
    }
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=card.js.map