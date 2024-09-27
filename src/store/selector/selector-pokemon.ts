import { createSelector } from 'reselect';
import { RootState } from '..';



const selectPokemonsState = (state: RootState) => state.pokemons;

export const selectFavoritePokemons = createSelector(
  [selectPokemonsState],
  (pokemons) => Object.values(pokemons)
);