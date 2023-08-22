import { HeroI, VillanI } from '../interfaces/index';

export function genericFunction<T>( argument: T):T{
    return argument;
}

export const genericFunctionArrow = <T>( argument: T):T => {
    return argument;
}

//generics helps arguments to determine dataType

const testingT = 'myName';
console.log( genericFunction(testingT).toLowerCase() )
console.log( genericFunction( 1.546546 ).toFixed(2) )

//another usage:
const deadpool = {
    name: 'DeadPool',
    realName: 'Wade Winston',
    dangerLevel: 130
}

console.log( genericFunctionArrow<VillanI>(deadpool).dangerLevel);



