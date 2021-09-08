import { configureStore } from '@reduxjs/toolkit';

import { pokemonSlice } from './pokemon.slice';
import { userDetailsSlice } from './userDetails.slice';

//---------------------------------------------------------------------------------------+

export const reduxToolkitRootStore = configureStore({
  reducer: {
    userDetails: userDetailsSlice.reducer,
    pokedex: pokemonSlice.reducer,
  },
});
