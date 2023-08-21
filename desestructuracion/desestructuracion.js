"use strict";
//desctructuring
Object.defineProperty(exports, "__esModule", { value: true });
var ironman = {
    name: "Robert Jr",
    age: 25,
    power: ["power1", "power2"],
    active: false
};
var destructureTest = function (_a) {
    var name = _a.name, age = _a.age;
    return name + ' age is: ' + age;
};
var test = destructureTest(ironman);
console.log(test);
//obtain specific paramenters from an object (and not all if not needed)
