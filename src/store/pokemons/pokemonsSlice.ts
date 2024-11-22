import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsFavorite {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsFavorite => {
//   const favorites = JSON.parse(localStorage.getItem('pokemons-favorites') ?? '{}' )

//   return favorites;
// }

const initialState: PokemonsFavorite = {
  // ...getInitialState()
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavorites(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.favorites = action.payload
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
    }
  }
});

export const { toggleFavorite, setFavorites } = pokemonsSlice.actions

export default pokemonsSlice.reducer