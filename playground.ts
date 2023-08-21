const myRecursive = (n:number) => {  
    const myArray: string[] = n.toString().split('');
    let result: number = 0; 

    const myMap:number[] = myArray.map((value) => { 
        return Number(value)
    })    

    myMap.forEach((value) => {
        result = result + value;
    }) 

    if(result > 9){ 
        return myRecursive(result); 
    }  
    return result;
}

console.log(myRecursive(493193));

//

function sumar(a: number, b: number):number {
    return a + b;
}

const contar = ( heroes:string ): number => {
    return heroes.length;
}

const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];

const llamarBatman = (llamar: boolean = true):void => {
    if(llamar){
        console.log("Batisenal Activada")
    }
}

const unirHeroes = ( ...personas:string[] ):string => {
    return personas.join(", ");
}

const noHaceNada = ( numero:number, texto: string, booleano: boolean, arreglo: string[]) => { 
}

let nothingHere = Function();

nothingHere = noHaceNada;
  

console.log(nothingHere(5,'t',true,["s","a"]))
