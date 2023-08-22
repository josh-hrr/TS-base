"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_pokemon_1 = require("../generics/get-pokemon");
(0, get_pokemon_1.getPokemon)(1)
    .then(function (resp) { return console.log(resp); })
    .catch(function (error) { return console.log(error); })
    .finally(function () { return console.log('Exiting program...'); });
