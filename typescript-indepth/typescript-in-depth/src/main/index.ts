import { Hero } from "../classes/Hero"; 
import powersArray from "../data/data"; //using default import, does not need curly braces. Can give any name

const ironman = new Hero('Ironman', 10, 55); 
console.log(ironman.power);


for(const indexValue of powersArray){
    console.log(indexValue)
}

//generics








