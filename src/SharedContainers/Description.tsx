import React from 'react';
import { Counter } from './Counter';

//---------------------------------------------------------------------------------------+

type DescriptionProperties = {
  title: string;
  intro: string;
  exampleDetails: string;
  children?: React.ReactNode;
};

//---------------------------------------------------------------------------------------+

export const Description: React.FC<DescriptionProperties> = ({
  title,
  intro,
  exampleDetails,
  children,
}: DescriptionProperties): JSX.Element => {
  return (
    <section className='card'>
      <header className='card-header is-justify-content-center'>
        <p className='card-header-title is-size-4 is-flex-grow-0'>{title}</p>
      </header>
      <div className='card-content'>
        <p className='content'>{intro}</p>
        <pre className='mb-5'>
          <code className='content'>{exampleDetails}</code>
        </pre>
        <div className='content columns'>
          {React.Children.map(children, (child) => {
            return <div className='column'>{child}</div>;
          })}
        </div>
      </div>
      <div className='card-footer'>
        <div className='card-footer-item'>
          <Counter />
        </div>
      </div>
    </section>
  );
};
