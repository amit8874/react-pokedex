function PokemonDetail({ pokemon }) {
  return (
    <div className="space-y-4 text-gray-800">
      <div className="text-center">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} className="w-40 mx-auto" />
        <h1 className="capitalize text-3xl font-bold">{pokemon.name}</h1>
        <p className="text-sm text-gray-600">#{pokemon.id}</p>
      </div>

      <div className="flex justify-center gap-4">
        <div className="bg-indigo-100 rounded-lg px-4 py-2 shadow-md">
          <span className="font-semibold">Height:</span> {pokemon.height}
        </div>
        <div className="bg-indigo-100 rounded-lg px-4 py-2 shadow-md">
          <span className="font-semibold">Weight:</span> {pokemon.weight}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Types</h2>
        <div className="flex gap-2 flex-wrap">
          {pokemon.types.map((t, i) => (
            <span key={i} className="bg-pink-200 px-3 py-1 rounded-full shadow-sm capitalize text-sm">
              {t.type.name}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Abilities</h2>
        <ul className="list-disc list-inside">
          {pokemon.abilities.map((a, i) => (
            <li key={i} className="capitalize">{a.ability.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetail;
