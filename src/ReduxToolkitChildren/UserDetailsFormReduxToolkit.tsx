import React, { FormEvent } from 'react';

import { useSelector } from 'react-redux';
import { reduxToolkitRootStore } from 'ReduxToolkitStore/root.store';
import { selectUserDetails } from 'ReduxStore/root.selectors';
import { changeUserDetails } from 'ReduxToolkitStore/userDetails.actions';

import { CustomHTMLFormElement, UserDetails } from 'types';
import { BaseUserDetailsForm } from 'SharedChildren/BaseUserDetailsForm';
import { Counter } from 'SharedContainers/Counter';

export const UserDetailsFormReduxToolkit: React.VFC = (): JSX.Element => {
  const userDetails: UserDetails = useSelector(selectUserDetails);

  const updateUserDetails = (event: FormEvent<CustomHTMLFormElement>): void => {
    event.preventDefault();

    const newUserDetails: UserDetails = {
      username: event.currentTarget.username.value,
      age: Number(event.currentTarget.age.value),
    };

    reduxToolkitRootStore.dispatch(changeUserDetails(newUserDetails));
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
