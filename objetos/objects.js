(function () {
    var flash = {
        name: 'Barry',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    //typescript crea un nuevo tipo, de tipo objeto
    //por lo tanto se vuelve obligatorio implementar
    //sus propiedades al momento de llamar al objeto
    //utilizar types
    flash = {
        name: 'test',
        age: 24,
    };
    console.log(flash);
})();
