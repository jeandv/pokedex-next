import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { Title } from '../components/ui';
import { PokemonCard } from '../components/pokemon';

// Interfaces
import { PokemonsListResponse, SmallPokemon, PokemonCardsListProps } from '../interfaces';

const HomePage: NextPage<PokemonCardsListProps> = ({ pokemons }) => {

  return (
    <>
      <Layout title='Pokédex'>
        <section>
          <Title />
          <Grid.Container gap={2} justify='flex-start'>
            {pokemons.map((pokemon) => {
              return (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              )
            })
            }
          </Grid.Container>
        </section>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonsListResponse>('pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`,
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;