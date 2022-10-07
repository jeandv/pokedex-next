import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '../pokemon';

interface FavoritesPokemonsProps {
  pokemons: number[];
}

export const FavoritePokemons: FC<FavoritesPokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {pokemons.map(id => <FavoriteCardPokemon key={id} pokemonId={id} />)}
    </Grid.Container>
  );
};