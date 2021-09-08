import { UserDetails } from 'types';
import { RootState } from './root.types';

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
