"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero_1 = require("../classes/Hero");
var data_1 = require("../data/data"); //using default import, does not need curly braces. Can give any name
var ironman = new Hero_1.Hero('Ironman', 10, 55);
console.log(ironman.power);
for (var _i = 0, powersArray_1 = data_1.default; _i < powersArray_1.length; _i++) {
    var indexValue = powersArray_1[_i];
    console.log(indexValue);
}
