// function printToConsole( constructor: Function){
//     console.log(constructor)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pokemon = void 0;
    // function blockModify( constructor: Function ){
    //     Object.seal( constructor );
    //     Object.seal( constructor.prototype );
    // }
    // function checkValidationInput():Function{
    //     return function( target: any, propertyKey: string, descriptor: PropertyDescriptor){
    //         const originalMethod = descriptor.value;
    //         descriptor.value = (id: number) => {
    //             if(id < 1 || id > 800){
    //                 return console.error('Id of pokemon must be between 1 and 800')
    //             }else{
    //                 return originalMethod(id)
    //             }
    //         }
    //     }
    // }
    function readOnly(isWritable = true) {
        return function (target, propertyKey) {
            const descriptor = {
                get() {
                    return 'Fer';
                },
                set(value) {
                    Object.defineProperty(this, propertyKey, {
                        value: value,
                        writable: !isWritable
                    });
                }
            };
        };
    }
    // @blockModify
    // @printToConsole
    class Pokemon {
        constructor(name) {
            this.name = name;
            this.publicApi = 'https://pokeapi.co';
        }
        // @checkValidationInput()
        savePokemonToDB(id) {
            console.log(`Pokemon saved in DB ${id}`);
        }
    }
    exports.Pokemon = Pokemon;
    __decorate([
        readOnly(true)
    ], Pokemon.prototype, "publicApi", void 0);
    Pokemon.prototype.CustomName = 'new Name';
    const myPokemon = new Pokemon('Charmander');
    myPokemon.savePokemonToDB(1000);
    myPokemon.publicApi = 'modifyingAPI'; //throws an error
    console.log(myPokemon);
});
