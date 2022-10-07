import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';

interface FavCardPokemonProps {
  pokemonId: number;
}

export const FavoriteCardPokemon: FC<FavCardPokemonProps> = ({ pokemonId }) => {

  const { push } = useRouter();

  const onClickFavoritePokemon = () => push(`/pokemon/${pokemonId}`);

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId}>
      <Card isHoverable isPressable css={{ padding: 10 }} onClick={onClickFavoritePokemon}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
            alt={`Pokémon #${pokemonId}`}
            width='100%'
            height={140}
            objectFit='contain'
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text>#{pokemonId}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};