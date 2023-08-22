import powers from "../data/data";

export class Hero{ 
    
    constructor(
        public name: string,
        public powerId: number,
        public age: number 
    ){ 
        this.name = name;
        this.powerId = powerId;
        this.age = age;
    }

    get power(){ 
        return powers.find( (power) => power.id === this.powerId )?.characteristic || "not found";
    }

    ///? !
}