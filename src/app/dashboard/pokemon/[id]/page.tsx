import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

  const { id } = await params;
  const  {id: pokemonId, name} = await getPokemon(id)

  return {
    title: `#${pokemonId} - ${name}`,
    description: `Página del pokemon ${name}`
  }
}

const getPokemon = async (id: string): Promise<Pokemon> => {

  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
  })
    .then(res => res.json());

  return pokemon;
}

export default async function PokemonPage({ params }: Props) {

  const { id } = await params;
  const pokemon = await getPokemon(id)

  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}