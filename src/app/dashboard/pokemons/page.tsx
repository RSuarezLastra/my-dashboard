import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

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

  const pokemons = await getPokemons(100);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {
          pokemons.map(({ id, name }) => (
            <div key={id}>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                alt={name}
                width={100}
                height={100}
              />
              <h3>{name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  );
}