export type RequestStatus = 'Idle' | 'In Progress' | 'Finished' | 'Error';

export type Pokemon = {
  species: { name: string };
  sprites: { front_default: string };
};

export type PokemonState = {
  status: RequestStatus;
  pokemon: Pokemon;
};
