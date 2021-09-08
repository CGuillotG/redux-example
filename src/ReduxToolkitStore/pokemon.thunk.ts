import { createAsyncThunk, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { Pokemon, PokemonState } from './pokemon.types';

//---------------------------------------------------------------------------------------+

export const fetchPokemonRejectedReducer = (
  state: PokemonState,
  action: PayloadAction<unknown, string, unknown, SerializedError>
): void => {
  console.error(
    '[SPORTS] Thunk <Containers/fetchSettings> failed:',
    action.error.message
  );
  state.pokemon = { species: { name: 'MissingNo' }, sprites: { front_default: '' } };
  state.status = 'Error';
};

//---------------------------------------------------------------------------------------+

export const fetchPokemonPendingReducer = (state: PokemonState): void => {
  state.status = 'In Progress';
};

//---------------------------------------------------------------------------------------+

export const fetchPokemonFulfilledReducer = (
  state: PokemonState,
  action: PayloadAction<Pokemon>
): void => {
  state.pokemon = action.payload;
  state.status = 'Finished';
};

//---------------------------------------------------------------------------------------+

const FETCH_POKEMON_BY_NAME_ACTION: string = 'Pokemon/fetchByName';

const fetchPokemonByNamePayloadCreator = async (name: string): Promise<Pokemon> => {
  const pokeUrl: string = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const response: Response = await fetch(pokeUrl);
  const pokemon: Pokemon = (await response.json()) as Pokemon;

  return pokemon;
};

export const fetchPokemonByName = createAsyncThunk(
  FETCH_POKEMON_BY_NAME_ACTION,
  fetchPokemonByNamePayloadCreator
);
