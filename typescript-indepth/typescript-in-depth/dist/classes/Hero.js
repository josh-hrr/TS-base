var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../data/data"], function (require, exports, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hero = void 0;
    data_1 = __importDefault(data_1);
    class Hero {
        constructor(name, powerId, age) {
            this.name = name;
            this.powerId = powerId;
            this.age = age;
            this.name = name;
            this.powerId = powerId;
            this.age = age;
        }
        get power() {
            var _a;
            return ((_a = data_1.default.find((power) => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.characteristic) || "not found";
        }
    }
    exports.Hero = Hero;
});
