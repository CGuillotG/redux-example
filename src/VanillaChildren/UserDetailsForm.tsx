import React, { FormEvent } from 'react';

import { Counter } from 'SharedContainers/Counter';
import { BaseUserDetailsForm } from 'SharedChildren/BaseUserDetailsForm';
import { CustomHTMLFormElement, UserDetails, UserDetailsSetActions } from '../types';

//---------------------------------------------------------------------------------------+

type UserDetailsFormAttributes = {
  userDetails: UserDetails;
  setUserDetailsCallbacks: UserDetailsSetActions;
};

//---------------------------------------------------------------------------------------+

export const UserDetailsForm: React.VFC<UserDetailsFormAttributes> = ({
  userDetails,
  setUserDetailsCallbacks,
}: UserDetailsFormAttributes): JSX.Element => {
  const updateUserDetails = (event: FormEvent<CustomHTMLFormElement>): void => {
    event.preventDefault();

    setUserDetailsCallbacks.setUsername(event.currentTarget.username.value);
    setUserDetailsCallbacks.setAge(Number(event.currentTarget.age.value));
  };

  return (
    <>
      <BaseUserDetailsForm
        userDetails={userDetails}
        onSubmitCallback={updateUserDetails}
      />
      <Counter />
    </>
  );
};
