import React from 'react';

import { Counter } from 'SharedContainers/Counter';

//---------------------------------------------------------------------------------------+

export const DummyGrandchild: React.VFC = (): JSX.Element => {
  return (
    <>
      <p>
        I am just a dummy Grandchild Component. I do not receive properties and all of my
        content is static, it will never change!
      </p>

      <Counter />
    </>
  );
};
