import React, { MutableRefObject, useRef } from 'react';

//---------------------------------------------------------------------------------------+

export const Counter: React.VFC = (): JSX.Element => {
  // [NOTE] References are wonderful. Their values persist
  // between re-renders (like useState values), but modifying them does not
  // trigger a re-render.
  const count: MutableRefObject<number> = useRef<number>(0);
  count.current += 1;

  return <div className='has-text-centered'># of Renders: {count.current}</div>;
};
