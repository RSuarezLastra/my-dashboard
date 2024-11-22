'use client'

import Link from "next/link";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { SimplePokemon } from '@/pokemons';


export const PokemonCard = ({ id, name }: SimplePokemon) => {

  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(state => !!state.pokemons.favorites[id]);

  const onToggle = () => {
    dispatch(toggleFavorite({ id, name }));
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
            <div className="text-red-500">
              {
                isFavorite
                  ? <IoHeart />
                  : <IoHeartOutline />
              }
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {
                  isFavorite
                    ? 'Favorito'
                    : 'No Favorito'
                }
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
