// Cree una interfaz para validar el auto (el valor enviado por parametro)
var conducirBatimovil = function (auto) {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
var myBatimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear: function () {
        console.log("...... gogogo!!!");
    }
};
var guason = {
    reir: true,
    comer: true,
    llorar: false
};
var reir = function (guason) {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
var cuidadGotica;
cuidadGotica = function (ciudadanos) {
    return ciudadanos.length;
};
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    Persona.prototype.imprimirBio = function () {
        console.log("testing interface implementation in this class");
    };
    ;
    Persona.prototype.imprimirTodo = function () {
        return this.nombre + this.edad + this.sexo + this.estadoCivil;
    };
    return Persona;
}());
var persona1 = new Persona("Josue", 20, "M", "Soltero");
persona1.imprimirBio();
var guardarImprimirTodo = persona1.imprimirTodo();
console.log(guardarImprimirTodo);
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
