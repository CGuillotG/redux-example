import React from 'react';
import { useState } from 'react';

import { Hero } from './SharedContainers/Hero';
import { Description } from 'SharedContainers/Description';

import { ChildrenContainer } from './SharedChildren/ChildrenContainer';
import { DummyGrandchild } from './SharedChildren/DummyGrandchild';

import { StaticUserDetails } from './VanillaChildren/StaticUserDetails';
import { UserDetailsForm } from './VanillaChildren/UserDetailsForm';

//---------------------------------------------------------------------------------------+

export const VanillaApp: React.VFC = (): JSX.Element => {
  // [NOTE] First declare our global 'store'.
  const [username, setUsername] = useState<string>('Senjutsuki');
  const [age, setAge] = useState<number>(31);

  return (
    <section className='box'>
      <Hero
        title='Vanilla App with no Redux'
        subtitle='An example of how to share and change information with no Store'
      />

      <section className='section'>
        <Description
          title='This is the VanillaApp Root'
          intro={
            'When not using Redux, one way to share information between components ' +
            'is by storing them in a common parent component, then passing the values ' +
            'to the children as properties. ' +
            'In this example, the VanillaApp root component holds the username and age, ' +
            'and passes that information around. However, every time the info is updated, ' +
            'the whole tree will redraw.'
          }
          exampleDetails={
            'VanillaApp.tsx\n\n' +
            'const VanillaApp = () {\n' +
            "  // [NOTE] First declare our global 'store' (Single Source of Truth).\n" +
            "  const [username, setUsername] = useState<string>('Senjutsuki');\n" +
            '  const [age, setAge] = useState<number>(31);\n\n' +
            '  // [NOTE] Then pass the info the child elements.\n' +
            '  <UsernameComponent username={username}/>\n' +
            '  <AgeComponent age={age}/>\n\n' +
            "  // [NOTE] You can also pass the 'set' callbacks.\n" +
            '  <UserDetailsForm usernameCallback={setUsername} ageCallback={setAge}/>\n\n' +
            '}'
          }
        >
          <ChildrenContainer title='Static Content'>
            <DummyGrandchild />
          </ChildrenContainer>

          {/* Pass the info to the child elements. */}
          <ChildrenContainer title='User Details'>
            <StaticUserDetails userDetails={{ username, age }} />
          </ChildrenContainer>

          <ChildrenContainer title='User Details Form'>
            <UserDetailsForm
              userDetails={{ username, age }}
              setUserDetailsCallbacks={{ setUsername, setAge }}
            />
          </ChildrenContainer>
        </Description>
      </section>
    </section>
  );
};
