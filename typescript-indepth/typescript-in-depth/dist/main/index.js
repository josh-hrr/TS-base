var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../classes/Hero", "../data/data"], function (require, exports, Hero_1, data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    data_1 = __importDefault(data_1);
    const ironman = new Hero_1.Hero('Ironman', 10, 55);
    console.log(ironman.power);
    for (const indexValue of data_1.default) {
        console.log(indexValue);
    }
});
//generics
