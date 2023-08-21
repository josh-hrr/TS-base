import { Avenger } from "../desestructuracion/desestructuracion";

(() => {

    const ironman: Avenger = {
        name: "Robert Jr",
        age: 25,
        power: ["power1", "power2"],
        active: false
    }    

    const cap: Avenger = {
        name: "Capitan A.",
        age: 30,
        power: ["power1", "power2"],
        active: true
    }   

    const thor: Avenger = {
        name: "THOR",
        age: 33,
        power: ["power1", "power2", "power3"],
        active: true
    } 


    const myAvengers:Avenger[] = [ironman, cap, thor];

    for (const indexValue of myAvengers){
        console.log(indexValue.name) //prints indexValue > objectValue
    }

})()