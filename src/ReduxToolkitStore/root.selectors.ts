import { RootState } from './root.types';
import { UserDetails } from 'types';
import { Pokemon } from './pokemon.types';

//---------------------------------------------------------------------------------------+

export const selectUsername = (state: RootState): string => {
  return state.userDetails.username;
};

export const selectAge = (state: RootState): number => {
  return state.userDetails.age;
};

export const selectUserDetails = (state: RootState): UserDetails => {
  return state.userDetails;
};

export const selectPokemon = (state: RootState): Pokemon => {
  return state.pokedex.pokemon;
};
