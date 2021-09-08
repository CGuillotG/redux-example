import React from 'react';

import { Counter } from 'SharedContainers/Counter';

//---------------------------------------------------------------------------------------+

type ChildrenContainerProperties = {
  title: string;
  children?: React.ReactNode;
};

//---------------------------------------------------------------------------------------+

export const ChildrenContainer: React.FC<ChildrenContainerProperties> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <section className='card'>
      <header className='card-header is-justify-content-center'>
        <div className='card-header-title is-flex-grow-0'>{title}</div>
      </header>
      <div
        className={
          'card-content is-flex is-flex-direction-column is-justify-content-space-around'
        }
        style={{ minHeight: '285px' }}
      >
        {children}
      </div>
      <div className='card-footer'>
        <div className='card-footer-item'>
          <Counter />
        </div>
      </div>
    </section>
  );
};
