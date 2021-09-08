import React from 'react';
import { CustomHTMLFormSubmitCallback, UserDetails } from 'types';

//---------------------------------------------------------------------------------------+

type BaseFormAttributes = {
  userDetails: UserDetails;
  onSubmitCallback: CustomHTMLFormSubmitCallback;
};

//---------------------------------------------------------------------------------------+

export const BaseUserDetailsForm: React.VFC<BaseFormAttributes> = ({
  userDetails,
  onSubmitCallback,
}: BaseFormAttributes): JSX.Element => {
  return (
    <form onSubmit={onSubmitCallback}>
      <label className='label'>Username</label>
      <div className='field has-addons'>
        <input
          className='input is-primary'
          name='username'
          type='text'
          defaultValue={userDetails.username}
        ></input>
      </div>

      <label className='label '>Age</label>
      <div className='field has-addons'>
        <input
          className='input is-info'
          name='age'
          type='number'
          defaultValue={userDetails.age}
        ></input>
      </div>

      <input
        className='button is-primary is-fullwidth'
        type='submit'
        value='Update User Details'
      />
    </form>
  );
};
