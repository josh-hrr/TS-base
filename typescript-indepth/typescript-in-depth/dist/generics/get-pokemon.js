var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    axios_1 = __importDefault(axios_1);
    const getPokemon = async (pokemonId) => {
        const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        return response.data;
    };
    // async: turns my function into a Promise 
    // await: wait until Promise is solve to continue executing
    getPokemon(1)
        .then(resp => console.log(resp.sprites.front_default))
        .catch(error => console.log(error))
        .finally(() => console.log('Exiting program...'));
});
