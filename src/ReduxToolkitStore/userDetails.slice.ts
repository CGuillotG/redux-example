import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDetails } from 'types';

//---------------------------------------------------------------------------------------+

export const USER_DETAILS_SLICE_NAME: string = 'UserDetails';

const INITIAL_STATE: UserDetails = {
  username: 'senjutsuki',
  age: 31,
};

//---------------------------------------------------------------------------------------+

const changeUserDetailsCaseReducer: CaseReducer<
  UserDetails,
  PayloadAction<UserDetails>
> = (state: UserDetails, action: PayloadAction<UserDetails>): UserDetails => {
  state = action.payload;
  return state;
};

//---------------------------------------------------------------------------------------+

const USER_DETAILS_SLICE_SETTINGS = {
  name: USER_DETAILS_SLICE_NAME,
  initialState: INITIAL_STATE,

  reducers: {
    changeUserDetails: changeUserDetailsCaseReducer,
  },
};

export const userDetailsSlice = createSlice(USER_DETAILS_SLICE_SETTINGS);
