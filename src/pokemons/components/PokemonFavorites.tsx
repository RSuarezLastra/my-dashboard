'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const PokemonFavorites = () => {

  const favorites = useAppSelector(state => Object.values(state.pokemons));
  const [pokemons, setPokemons] = useState(favorites);

  return (
    <>
      {
        (pokemons.length === 0)
          ? <NoFavorites />
          : <PokemonGrid pokemons={pokemons} />
      }
    </>
  )
}

const NoFavorites = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <IoHeartOutline size={80} className="text-red-500" />
        <h4 className="text-2xl">No hay favoritos</h4>
    </div>
  )
}
