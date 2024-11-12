import { Pokemon } from "@/pokemons";

interface Props {
  params: { id: string }
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json());
  
  return pokemon;
}

export default async function PokemonPage({ params }: Props) {

  const pokemon = await getPokemon(params.id)

  return (
    <div>
      <h1>{JSON.stringify(pokemon)}</h1>
    </div>
  );
}