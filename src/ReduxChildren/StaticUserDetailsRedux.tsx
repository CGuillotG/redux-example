import React from 'react';

import { useSelector } from 'react-redux';
import { selectAge, selectUsername } from 'ReduxStore/root.selectors';

import { Counter } from 'SharedContainers/Counter';

//---------------------------------------------------------------------------------------+

export const StaticUserDetailsRedux: React.VFC = (): JSX.Element => {
  const username: string = useSelector(selectUsername);
  const age: number = useSelector(selectAge);

  return (
    <>
      <p>I only display the information I received from the store!</p>

      <div className='columns'>
        <span className='column'>
          <strong>Username: </strong>
        </span>
        <span className='column'>{username}</span>
      </div>

      <div className='columns'>
        <span className='column'>
          <strong>Age: </strong>
        </span>
        <span className='column'>{age}</span>
      </div>

      <Counter />
    </>
  );
};
