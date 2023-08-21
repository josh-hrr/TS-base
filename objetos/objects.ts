(() => {

    let flash: { name:string, age:number, powers?: string[], getName?: () => string } = {
        name: 'Barry',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    }

    //typescript crea un nuevo tipo, de tipo objeto
    //por lo tanto se vuelve obligatorio implementar
    //sus propiedades al momento de llamar al objeto

    //utilizar ? si queremos que un atributo sea opcional    
    flash = {
        name: 'test',
        age: 24, 
        getName(){
            return this.name;
        }


    


    } 
    



})()