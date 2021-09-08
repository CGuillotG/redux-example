import React from 'react';

import { Hero } from 'SharedContainers/Hero';
import { Description } from 'SharedContainers/Description';

import { ChildrenContainer } from 'SharedChildren/ChildrenContainer';
import { DummyGrandchild } from 'SharedChildren/DummyGrandchild';
import { StaticUserDetailsReduxToolkit } from 'ReduxToolkitChildren/StaticUserDetailsReduxToolkit';
import { UserDetailsFormReduxToolkit } from 'ReduxToolkitChildren/UserDetailsFormReduxToolkit';
import { PokemonDetailsReduxToolkit } from 'ReduxToolkitChildren/PokemonDetailsReduxToolkit';

import { reduxToolkitRootStore } from 'ReduxToolkitStore/root.store';
import { fetchPokemonByName } from 'ReduxToolkitStore/pokemon.thunk';

//---------------------------------------------------------------------------------------+

export const ReduxToolkitExampleApp: React.VFC = (): JSX.Element => {
  void reduxToolkitRootStore.dispatch(fetchPokemonByName('ditto'));

  return (
    <section className='box'>
      <Hero
        title='Redux-Toolkit App'
        subtitle='An example of how to use Redux-Toolkit extra functionality'
      />
      <section className='section'>
        <Description
          title='This is ReduxToolkitExampleApp Root'
          intro={
            'Redux-Toolkit sits on Redux and adds extra functionality ' +
            'that allow us to separate the store logic in slices. Each slice is ' +
            'a fragment of the store, with its own actions and redux processing logic, ' +
            'instead of handling ' +
            'everything in a monolithic store/redux. ' +
            "Redux-Toolkit also comes with Async actions called 'Thunks', that" +
            'allow us to fetch remote information.'
          }
          exampleDetails={''}
        >
          <ChildrenContainer title='Static Content'>
            <DummyGrandchild />
          </ChildrenContainer>

          <ChildrenContainer title='User Details Slice'>
            <StaticUserDetailsReduxToolkit />
          </ChildrenContainer>

          <ChildrenContainer title='User Details Slice Form'>
            <UserDetailsFormReduxToolkit />
          </ChildrenContainer>

          <ChildrenContainer title='Pokemon Slice'>
            <PokemonDetailsReduxToolkit />
          </ChildrenContainer>
        </Description>
      </section>
    </section>
  );
};
