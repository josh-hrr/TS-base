// function printToConsole( constructor: Function){
//     console.log(constructor)
// }

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

function readOnly( isWritable: boolean = true):Function {
    return function( target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {
            get() {
                return 'Fer'
            },
            set(this, value){
                Object.defineProperty(this, propertyKey, {
                    value: value,
                    writable: !isWritable
                } )
            }
        }
    }
}

// @blockModify
// @printToConsole
export class Pokemon {

    @readOnly(true)
    private publicApi: string = 'https://pokeapi.co';
    constructor(
        public name: string
    ){ 
    }

    // @checkValidationInput()
    savePokemonToDB( id: number){
        console.log(`Pokemon saved in DB ${id}`);
    }
}
 
(Pokemon.prototype as any).CustomName = 'new Name';


const myPokemon = new Pokemon('Charmander');
myPokemon.savePokemonToDB(1000);

myPokemon.publicApi = 'modifyingAPI'; //throws an error
console.log(myPokemon);

