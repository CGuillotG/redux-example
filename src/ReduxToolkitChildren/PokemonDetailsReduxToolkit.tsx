import React from 'react';
import { useSelector } from 'react-redux';
import { selectPokemon } from 'ReduxToolkitStore/root.selectors';

import { Counter } from 'SharedContainers/Counter';
import { Pokemon } from 'ReduxToolkitStore/pokemon.types';

export const PokemonDetailsReduxToolkit: React.VFC = (): JSX.Element => {
  const pokemon: Pokemon = useSelector(selectPokemon);

  return (
    <>
      <div className='container'>
        <img className='image' src={pokemon.sprites.front_default} />
        <strong>Pokemon: </strong> {pokemon.species.name}
      </div>
      <Counter />
    </>
  );
};
