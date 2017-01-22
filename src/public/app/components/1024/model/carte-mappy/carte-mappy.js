"use strict";
var magasin_1 = require("../magasin/magasin");
var CarteMappy = (function () {
    function CarteMappy() {
    }
    CarteMappy.prototype.getListeDeMagasinsDisponible = function (lat, lon) {
        var a = new magasin_1.Magasin;
        a.nom = "Garage Adam";
        a.type = "Garage";
        a.lat = "47.9965347";
        a.lon = "0.1934622";
        var result = new Array();
        result.push(a);
        return result;
    };
    CarteMappy.prototype.positionInitiale = function () {
        var lat;
        var lon;
        return { lat: lat, lon: lon };
    };
    return CarteMappy;
}());
exports.CarteMappy = CarteMappy;
//# sourceMappingURL=carte-mappy.js.map