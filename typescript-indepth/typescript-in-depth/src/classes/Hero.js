"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
var data_1 = require("../data/data");
var Hero = /** @class */ (function () {
    function Hero(name, powerId, age) {
        this.name = name;
        this.powerId = powerId;
        this.age = age;
        this.name = name;
        this.powerId = powerId;
        this.age = age;
    }
    Object.defineProperty(Hero.prototype, "power", {
        get: function () {
            var _this = this;
            var _a;
            return ((_a = data_1.default.find(function (power) { return power.id === _this.powerId; })) === null || _a === void 0 ? void 0 : _a.characteristic) || "not found";
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}());
exports.Hero = Hero;
