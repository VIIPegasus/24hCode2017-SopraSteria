"use strict";
var Deck = (function () {
    function Deck() {
        this.liste_carte = new Array();
    }
    Deck.prototype.addCard = function (card) {
        this.liste_carte.push(card);
    };
    Deck.prototype.addMultiCard = function (card, num) {
        for (var i = 0; i < num; i++) {
            this.liste_carte.push(card);
        }
    };
    return Deck;
}());
exports.Deck = Deck;
//# sourceMappingURL=deck.js.map