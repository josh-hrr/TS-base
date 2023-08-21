// Crear interfaces
interface autoI {
    encender: boolean,
    velocidadMaxima: number,
    acelear():void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: autoI ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
  }
  
  const myBatimovil:autoI = {
    encender:false,
    velocidadMaxima:0,
    acelear(){
      console.log("...... gogogo!!!");
    }
  }
  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface newVillanoI {
    reir?: boolean,
    comer?: boolean,
    llorar?: boolean
  }
  
  const guason:newVillanoI = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  const reir = ( guason:newVillanoI ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion

  interface cuidadMovie {
    (ciudadanos:string[]):number;
  }

  let cuidadGotica: cuidadMovie;
  
  cuidadGotica = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos
  
  interface descripcionPersonaI {
    nombre: string,
    edad: number,
    sexo: string,
    estadoCivil: string,
    imprimirBio(): void;
  }

  class Persona implements descripcionPersonaI{
    nombre: string;
    edad: number;
    sexo: string;
    estadoCivil: string;

    constructor(nombre:string, edad:number, sexo:string, estadoCivil:string){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }

    imprimirBio(){
        console.log("testing interface implementation in this class")
    };  

    imprimirTodo():string{
        return this.nombre + this.edad + this.sexo + this.estadoCivil;
    }
  }

  const persona1 = new Persona("Josue", 20, "M", "Soltero");
  persona1.imprimirBio();
  const guardarImprimirTodo = persona1.imprimirTodo();
  console.log(guardarImprimirTodo);

  //note: es posible heredar interfaces a otra interfaz

  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  