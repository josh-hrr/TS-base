(() => {

 
    //types puede contener atributos opcionales
    type Hero = {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }


    let flash: Hero = {
        name: 'Flash',
        powers: ['fast', 'timetraveler'],
    }

    let superman: Hero = {
        name: 'superman',
        age: 25,
        powers: ['test1', 'test2'],
        getName(){
            return this.name;
        }
    }

})()