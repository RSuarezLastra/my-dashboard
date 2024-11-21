import { PokemonFavorites } from "@/pokemons";

export const metadata = {
  title: 'Favorites',
  description: 'Favorite lsit pokemons'
}


export default function PokemonsPage() {


  return (
    <div className="flex flex-col p-2">

      <span className="text-5xl my-4">Pokemons Favoritos <small className="text-red-400">Estado global</small></span>

      <PokemonFavorites />
    </div>
  );
}