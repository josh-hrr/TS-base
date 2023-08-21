
//desctructuring

export type Avenger = {
    name: string,
    age: number,
    power: string[],
    active: boolean,
    getName?: () => string
 }

 let ironman:Avenger = {
    name: "Robert Jr",
    age: 25,
    power: ["power1", "power2"],
    active: false
 }

 const destructureTest = ( { name, age }: Avenger):string => {
    return name + ' age is: ' + age;
 }

 let test = destructureTest(ironman);
 console.log(test)


 //obtain specific paramenters from an object (and not all if not needed)