"use strict";
var Magasin = (function () {
    function Magasin() {
    }
    Magasin.prototype.test = function () {
        var a = new Magasin;
        a.nom = "Garage Adam";
        a.type = "Garage";
        a.lat = "47.9965347";
        a.lon = "0.1934622";
        return a;
    };
    return Magasin;
}());
exports.Magasin = Magasin;
//# sourceMappingURL=magasin.js.map