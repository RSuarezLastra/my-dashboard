
const getPokemons =async (limit: number = 20, offset: number = 0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then(res => res.json());

  return data;
}


export default async function PokemonsPage() {

  const pokemons = await getPokemons(100);

  return (
    <div>
      <p>{JSON.stringify(pokemons)}</p>
    </div>
  );
}