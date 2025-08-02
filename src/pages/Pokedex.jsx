import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
        const results = res.data.results;

        const detailedData = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );

        setPokemonList(detailedData);
      } catch (err) {
        console.error("Failed to fetch Pokémon", err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;
