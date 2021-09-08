import React, { FormEvent } from 'react';

import { useSelector } from 'react-redux';
import { reduxRootStore } from 'ReduxStore/root.store';
import { selectUserDetails } from 'ReduxStore/root.selectors';
import { RootActions } from 'ReduxStore/root.actions';

import { CustomHTMLFormElement, UserDetails } from 'types';
import { BaseUserDetailsForm } from 'SharedChildren/BaseUserDetailsForm';
import { Counter } from 'SharedContainers/Counter';

export const UserDetailsFormRedux: React.VFC = (): JSX.Element => {
  const userDetails: UserDetails = useSelector(selectUserDetails);

  const updateUserDetails = (event: FormEvent<CustomHTMLFormElement>): void => {
    event.preventDefault();

    const newUserDetails: UserDetails = {
      username: event.currentTarget.username.value,
      age: Number(event.currentTarget.age.value),
    };

    reduxRootStore.dispatch({
      type: RootActions.CHANGE_USER_DETAILS,
      payload: newUserDetails,
    });
  };

  return (
    <>
      <BaseUserDetailsForm
        userDetails={{ username: userDetails.username, age: userDetails.age }}
        onSubmitCallback={updateUserDetails}
      />
      <Counter />
    </>
  );
};
