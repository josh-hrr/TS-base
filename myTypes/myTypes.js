var batimovil = {
    carroceria: 'Neg',
    modelo: "6x6",
    antibalas: true,
    pasajeros: 20
};
var bumblebee = {
    carroceria: 'Yellow',
    modelo: "4x4",
    antibalas: false,
    pasajeros: 15,
    disparar: function () {
        console.log("Ready..");
    }
};
var villanos = [
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
];
console.log(villanos);
