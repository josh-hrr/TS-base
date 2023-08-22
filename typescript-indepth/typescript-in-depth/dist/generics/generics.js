define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericFunctionArrow = exports.genericFunction = void 0;
    function genericFunction(argument) {
        return argument;
    }
    exports.genericFunction = genericFunction;
    const genericFunctionArrow = (argument) => {
        return argument;
    };
    exports.genericFunctionArrow = genericFunctionArrow;
    //generics helps arguments to determine dataType
    const testingT = 'myName';
    console.log(genericFunction(testingT).toLowerCase());
    console.log(genericFunction(1.546546).toFixed(2));
    //another usage:
    const deadpool = {
        name: 'DeadPool',
        realName: 'Wade Winston',
        dangerLevel: 130
    };
    console.log((0, exports.genericFunctionArrow)(deadpool).dangerLevel);
});
