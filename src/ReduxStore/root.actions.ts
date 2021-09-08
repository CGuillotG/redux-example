import { AnyAction } from 'redux';
import { UserDetails } from 'types';

//---------------------------------------------------------------------------------------+

export enum RootActions {
  CHANGE_USER_DETAILS = '[ACTION] ChangeUserDetails',
  CHANGE_USERNAME = '[ACTION] ChangeUsername',
  CHANGE_AGE = '[ACTION] ChangeAge',
}

//---------------------------------------------------------------------------------------+

export const changeUserDetails = (payload: UserDetails): AnyAction => {
  return { type: RootActions.CHANGE_USER_DETAILS, payload };
};
