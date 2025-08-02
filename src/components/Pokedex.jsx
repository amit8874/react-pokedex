import { useEffect, useState } from "react";
import PokemonDetail from "./PokemonDetail";
import PokemonCard from "./PokemonCard";
import axios from "axios";

function Pokedex(){
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, seetSelectedPokemon] = useState(null);

    useEffect(()=> {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then(async (res)=> {
            const pokemonData = await Promise.all(
                res.data.results.map(async (p) => {
                    const pokeDetails = await axios.get(p.url);
                    return pokeDetails.data;
                })
            );
            setPokemonList(pokemonData);
        });
    }, []);

    return(
        <div className="flex w-full gap-4">
            <div className="w-1/2 overflow-y-auto grid grid-cols-2 gap-4 p-4 rounded-xl bg-opacity-60 shadow-2xl">
                {pokemonList.map((p)=>(
                    <PokemonCard key={p.id} pokemon={p} onClick={()=> seetSelectedPokemon(p)}/>
                ))}
            </div>

            {/* this is detail section*/}
            <div className="w-1/2 p-4 rounded-xl bg-opacity-60 shadow-2xl">
                {selectedPokemon ? (
                    <PokemonDetail pokemon={selectedPokemon}/>
                ):(
                    <div className="text-center text-gray-500 text-xl font-semibold">
                        Select a Pokemon
                    </div>
                )}
            </div>
        </div>
    )
}
export default Pokedex;