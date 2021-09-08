import React from 'react';
import { UserDetails } from '../types';

//---------------------------------------------------------------------------------------+

type StaticUserDetailsAttributes = {
  userDetails: UserDetails;
};

//---------------------------------------------------------------------------------------+

export const StaticUserDetails: React.VFC<StaticUserDetailsAttributes> = ({
  userDetails,
}: StaticUserDetailsAttributes): JSX.Element => {
  return (
    <>
      <p>I only display the information I received from my parent container!</p>

      <div className='columns'>
        <span className='column'>
          <strong>Username: </strong>
        </span>
        <span className='column'>{userDetails.username}</span>
      </div>

      <div className='columns'>
        <span className='column'>
          <strong>Age: </strong>
        </span>
        <span className='column'>{userDetails.age}</span>
      </div>
    </>
  );
};
