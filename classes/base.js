/*
private, access is only within the class
public, access is within or other classes, or packages
protected, access is withn or other classes being extended(using inheritance) but not from outside of this context
stattic, access without instantiating

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*

identifiers + variableName : type

--can be used at class level
--can be used at construcutor parameter level

static, cannot be used as explain above,
only at class level

*/
/*

encapsulating

get
set

*/
/*

abstract

cannot be instantiated
work to:
- have other classes extend this class
- to implement functionatlity defined in abstract
- in the class in which we extend the abstract we can have their own funcionality (in addition to abstract)
*/
var Mutante = /** @class */ (function () {
    function Mutante(name, realName) {
        this.name = name;
        this.realName = realName;
        this.name = name;
        this.realName = realName;
    }
    return Mutante;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Xmen.prototype.salvarMundo = function () {
        return "mundo a salvo";
    };
    return Xmen;
}(Mutante));
var Villan = /** @class */ (function (_super) {
    __extends(Villan, _super);
    function Villan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Villan.prototype.conquistarMundo = function () {
        return "mundo conquistado";
    };
    return Villan;
}(Mutante));
var wolverine = new Xmen('Wolverine', 'Logan');
var magneto = new Villan('Magneto', 'Magnus');
console.log(wolverine);
console.log(wolverine.salvarMundo());
console.log(magneto);
console.log(magneto.conquistarMundo());
//
var printName = function (character) {
    console.log(character.name);
};
printName(wolverine);
