// src/components/PokemonCard.jsx
function PokemonCard({ pokemon, onClick }) {
  return (
    <div
      className="cursor-pointer bg-gradient-to-tr from-black to-gray-400 rounded-2xl shadow-lg hover:scale-105 transform transition p-4 flex flex-col items-center"
      onClick={onClick}
    >
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24" />
      <h2 className="capitalize text-lg font-bold mt-2">{pokemon.name}</h2>
      <div className="text-sm text-gray-400">#{pokemon.id}</div>
    </div>
  );
}

export default PokemonCard;
