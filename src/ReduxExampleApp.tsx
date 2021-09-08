import React from 'react';

import { Hero } from 'SharedContainers/Hero';
import { Description } from 'SharedContainers/Description';

import { ChildrenContainer } from 'SharedChildren/ChildrenContainer';
import { DummyGrandchild } from 'SharedChildren/DummyGrandchild';

import { StaticUserDetailsRedux } from 'ReduxExampleChildren/StaticUserDetailsRedux';
import { UserDetailsFormRedux } from 'ReduxExampleChildren/UserDetailsFormRedux';

//---------------------------------------------------------------------------------------+

export const ReduxExampleApp: React.VFC = (): JSX.Element => {
  return (
    <section className='box'>
      <Hero
        title='Redux App'
        subtitle='An example of how to share and change information with Redux'
      />

      <section className='section'>
        <Description
          title='This is ReduxExampleApp Root'
          intro={
            "Redux helps us create an object called 'Store', which is used to keep " +
            'our information (State) safe in one single place, following the principle of ' +
            'Single Source of Truth. ' +
            'The store should never be accessed or modified directly in order to keep the ' +
            'information safe. To access the information, we need to use selectors, ' +
            'and if we want to modify it, we dispatch actions.'
          }
          exampleDetails={''}
        >
          <ChildrenContainer title='Static Content'>
            <DummyGrandchild />
          </ChildrenContainer>

          <ChildrenContainer title='User Details'>
            <StaticUserDetailsRedux />
          </ChildrenContainer>

          <ChildrenContainer title='User Details Form'>
            <UserDetailsFormRedux />
          </ChildrenContainer>
        </Description>
      </section>
    </section>
  );
};
