type Movil = {
    carroceria: string,
    modelo: string,
    antibalas: boolean,
    pasajeros: number,
    disparar?: () => void
}

const batimovil: Movil = {
    carroceria: 'Neg',
    modelo: "6x6",
    antibalas: true,
    pasajeros: 20
}


const bumblebee: Movil = {
    carroceria: 'Yellow',
    modelo: "4x4",
    antibalas: false,
    pasajeros: 15,
    disparar(){
        console.log("Ready..")
    } 
} 

type Villano = {
    nombre: string,
    edad: number,
    mutante: boolean
} 

const villanos: Villano[] = [
    {
        nombre: 'Lex Luthor',
        edad: 25,
        mutante: false
    },
    {
        nombre: 'Erik',
        edad: 445,
        mutante: true
    } 
]

console.log(villanos);

//tsconfig

//exclude, include, outFile, removeComments, SourceMap

/*

"exclude": [
    "objetos/*.ts"
]

"include": [
    "node_modules"
]

"outFile": "./main.js"


*/
//removeComments
//sourceMap

//debugging in DOM seeing the map (ts) file



//reasignacion de funciones
/*

porque utilizar const en una funcion
var scope


*/

