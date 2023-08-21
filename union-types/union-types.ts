
type Hero = {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string
}

//unions
let myCustomVariable: (string | number | Hero) = 'Stark'

myCustomVariable = 25;
console.log(myCustomVariable);

myCustomVariable = {
    name: 'Bruce',
    age: 42,
    powers: ['fly']
}

console.log(myCustomVariable);


