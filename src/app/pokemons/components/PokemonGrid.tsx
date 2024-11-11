import { PokemonCard, SimplePokemon } from '@/app/pokemons';

interface Props {
  pokemons: SimplePokemon[]
}


export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemons.map( pokemon => (
          <div key={pokemon.id}>
            {/* <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
              alt={name}
              width={100}
              height={100}
            /> */}
            <PokemonCard {...pokemon} />
          </div>
        ))
      }
    </div>
  )
}
