
/*
private, access is only within the class
public, access is within or other classes, or packages
protected, access is withn or other classes being extended(using inheritance) but not from outside of this context
stattic, access without instantiating

*/

/*

identifiers + variableName : type

--can be used at class level 
--can be used at construcutor parameter level

static, cannot be used as explain above,
only at class level

*/


/*

encapsulating 

get
set

*/

/*

abstract

cannot be instantiated
work to:
- have other classes extend this class
- to implement functionatlity defined in abstract
- in the class in which we extend the abstract we can have their own funcionality (in addition to abstract)
*/

 abstract class Mutante {
    constructor(public name:string, public realName:string){
        this.name = name;
        this.realName = realName;
    }
 }

 class Xmen extends Mutante { 
    salvarMundo(){
        return "mundo a salvo"
    }
  }
 class Villan extends Mutante { 
    conquistarMundo(){
        return "mundo conquistado"
    }
  }

const wolverine = new Xmen('Wolverine', 'Logan')
const magneto = new Villan('Magneto', 'Magnus')

console.log(wolverine)
console.log(wolverine.salvarMundo())
console.log(magneto)
console.log(magneto.conquistarMundo())


//in paramenter pass Abstract as type
//in argument   pass regular class

const printName = (character: Mutante) => {
    console.log(character.name);
}

printName(wolverine);