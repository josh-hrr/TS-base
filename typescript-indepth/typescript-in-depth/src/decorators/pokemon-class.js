"use strict";
// function printToConsole( constructor: Function){
//     console.log(constructor)
// }
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
function readOnly(isWritable) {
    if (isWritable === void 0) { isWritable = true; }
    return function (target, propertyKey) {
        var descriptor = {
            get: function () {
                return 'Fer';
            },
            set: function (value) {
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
var Pokemon = exports.Pokemon = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _publicApi_decorators;
    var _publicApi_initializers = [];
    return _a = /** @class */ (function () {
            function Pokemon(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
                this.publicApi = __runInitializers(this, _publicApi_initializers, 'https://pokeapi.co');
            }
            // @checkValidationInput()
            Pokemon.prototype.savePokemonToDB = function (id) {
                console.log("Pokemon saved in DB ".concat(id));
            };
            return Pokemon;
        }()),
        (function () {
            _publicApi_decorators = [readOnly(true)];
            __esDecorate(null, null, _publicApi_decorators, { kind: "field", name: "publicApi", static: false, private: false, access: { has: function (obj) { return "publicApi" in obj; }, get: function (obj) { return obj.publicApi; }, set: function (obj, value) { obj.publicApi = value; } } }, _publicApi_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();
Pokemon.prototype.CustomName = 'new Name';
var myPokemon = new Pokemon('Charmander');
myPokemon.savePokemonToDB(1000);
myPokemon.publicApi = 'modifyingAPI';
console.log(myPokemon);
