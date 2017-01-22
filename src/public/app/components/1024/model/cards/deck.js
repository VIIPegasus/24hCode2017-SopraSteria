"use strict";
var Deck = (function () {
    function Deck() {
    }
    Deck.prototype.addCard = function (card) {
        this.liste_carte.push(card);
    };
    return Deck;
}());
exports.Deck = Deck;
//# sourceMappingURL=deck.js.map