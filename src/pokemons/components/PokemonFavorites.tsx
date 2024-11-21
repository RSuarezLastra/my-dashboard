'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";

export const PokemonFavorites = () => {

  const favorites = useAppSelector(state => Object.values(state.pokemons));

  return (
    <PokemonGrid pokemons={favorites} />
  )
}
