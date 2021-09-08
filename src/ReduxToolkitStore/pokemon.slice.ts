import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';

import {
  fetchPokemonByName,
  fetchPokemonFulfilledReducer,
  fetchPokemonPendingReducer,
  fetchPokemonRejectedReducer,
} from './pokemon.thunk';
import { PokemonState } from './pokemon.types';

//---------------------------------------------------------------------------------------+

export const POKEMON_SLICE_NAME: string = 'Pokedex';

const INITIAL_STATE: PokemonState = {
  status: 'Idle',
  pokemon: {
    species: { name: '' },
    sprites: { front_default: '' },
  },
};

//---------------------------------------------------------------------------------------+

const pokemonExtraReducers = (builder: ActionReducerMapBuilder<PokemonState>): void => {
  builder.addCase(fetchPokemonByName.pending, fetchPokemonPendingReducer);
  builder.addCase(fetchPokemonByName.fulfilled, fetchPokemonFulfilledReducer);
  builder.addCase(fetchPokemonByName.rejected, fetchPokemonRejectedReducer);
};

//---------------------------------------------------------------------------------------+

const POKEMON_SLICE_SETTINGS = {
  name: POKEMON_SLICE_NAME,
  initialState: INITIAL_STATE,

  reducers: {},
  extraReducers: pokemonExtraReducers,
};

export const pokemonSlice = createSlice(POKEMON_SLICE_SETTINGS);
