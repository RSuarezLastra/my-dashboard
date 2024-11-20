import { SimplePokemon } from '@/pokemons';
import { createSlice } from '@reduxjs/toolkit'

interface PokemonsFavorite {
  [key: string]: SimplePokemon;
}


const initialState: PokemonsFavorite = {
  '1': {id: '1', name: 'bulbasour'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    
  }
});

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer