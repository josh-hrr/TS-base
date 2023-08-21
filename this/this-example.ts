// Contexto global

(() => { 

    const globalObject = {
        value: "Soy global",
        arrowFunction: () => {
          return this.value;  // En una función de flecha, "this" captura el contexto global
        }
      };

      //otro ejemplo, funcion regular
      let superman = {
        name: 'superman',
        age: 25,
        powers: ['test1', 'test2'],
        getName(){
            return this.name;
        }
    }
      
    globalObject.arrowFunction();  // Salida: "Soy global" 
    superman.getName();  // Salida: "superman" 

}) ()

/*

//funcion regular

// Contexto global
const globalObject = {
  value: "Soy global",
  regularFunction: function() {
    console.log(this.value);  // En una función regular, "this" depende de cómo se llama la función
  }
};

globalObject.regularFunction();  // Salida: "Soy global"

const anotherObject = {
  value: "Soy otro objeto"
};

anotherObject.regularFunction = globalObject.regularFunction;
anotherObject.regularFunction();  // Salida: "Soy otro objeto"

*/
