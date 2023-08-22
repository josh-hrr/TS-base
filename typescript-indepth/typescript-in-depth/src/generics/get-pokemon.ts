import axios from "axios";  
import { PokemonIapi } from '../interfaces/index'; 
 
const getPokemon = async(pokemonId:number): Promise<PokemonIapi> => {
    const response = await axios.get<PokemonIapi>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    return response.data;
}

// async: turns my function into a Promise 
// await: wait until Promise is solve to continue executing


getPokemon(1)
            .then( resp => console.log( resp.sprites.front_default ) )
            .catch( error => console.log(error) )
            .finally( () => console.log('Exiting program...'))
  