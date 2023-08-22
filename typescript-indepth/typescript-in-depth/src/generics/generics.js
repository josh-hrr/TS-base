"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericFunctionArrow = exports.genericFunction = void 0;
function genericFunction(argument) {
    return argument;
}
exports.genericFunction = genericFunction;
var genericFunctionArrow = function (argument) {
    return argument;
};
exports.genericFunctionArrow = genericFunctionArrow;
//generics helps arguments to determine dataType
var testingT = 'myName';
console.log(genericFunction(testingT).toLowerCase());
console.log(genericFunction(1.546546).toFixed(2));
//another usage:
var deadpool = {
    name: 'DeadPool',
    realName: 'Wade Winston',
    dangerLevel: 130
};
console.log((0, exports.genericFunctionArrow)(deadpool).realName);
