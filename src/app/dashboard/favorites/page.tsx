import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: 'Favorites',
  description: 'Favorite lsit pokemons'
}

const getPokemons = async (limit: number = 20, offset: number = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  return pokemons;
}


export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col p-2">

      <span className="text-5xl my-4">Pokemons Favoritos <small className="text-red-400">Estado global</small></span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}