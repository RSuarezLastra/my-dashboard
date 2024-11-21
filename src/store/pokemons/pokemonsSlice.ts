import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsFavorite {
  [key: string]: SimplePokemon;
}

const getInitialState = (): PokemonsFavorite => {
  const favorites = JSON.parse(localStorage.getItem('pokemons-favorites') ?? '{}' )

  return favorites;
}

const initialState: PokemonsFavorite = {
  ...getInitialState()
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
      }else{
        state[id] = pokemon;
      }

      localStorage.setItem( 'pokemons-favorites' ,JSON.stringify(state));
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer