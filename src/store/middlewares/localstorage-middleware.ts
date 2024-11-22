import { Action, Dispatch, Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";


export const localStorageMiddleware = (store) => {
  return (next) => (action) => {

    next(action);

    if (action.type === 'pokemons/toggleFavorite') {
      const { pokemons } = store.getState() as RootState
      localStorage.setItem( 'pokemons-favorites' ,JSON.stringify(pokemons));
      return;
    }

  }
}
