import { AnyAction } from 'redux';

import { RootActions } from './root.actions';
import { RootState } from './root.types';

import { UserDetails } from 'types';

//---------------------------------------------------------------------------------------+

const INITIAL_STATE: RootState = {
  userDetails: {
    username: 'senjutsuki',
    age: 31,
  },
};

//---------------------------------------------------------------------------------------+

export const rootReducer = (
  state: RootState = INITIAL_STATE,
  action: AnyAction
): RootState => {
  switch (action.type) {
    case RootActions.CHANGE_USER_DETAILS: {
      const newUserDetails: UserDetails = action.payload as UserDetails;
      return {
        ...state,
        userDetails: {
          username: newUserDetails.username,
          age: newUserDetails.age,
        },
      };
    }

    default:
      return state;
  }
};
