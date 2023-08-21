"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    var ironman = {
        name: "Robert Jr",
        age: 25,
        power: ["power1", "power2"],
        active: false
    };
    var cap = {
        name: "Capitan A.",
        age: 30,
        power: ["power1", "power2"],
        active: true
    };
    var thor = {
        name: "THOR",
        age: 33,
        power: ["power1", "power2", "power3"],
        active: true
    };
    var myAvengers = [ironman, cap, thor];
    for (var index in myAvengers) {
        console.log(index); //prints index
        console.log(myAvengers[index].name); //prints indexValue 
    }
})();
