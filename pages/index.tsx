import { NextPage, GetStaticProps } from 'next';
import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonCards } from '../components/pokemon';

// Interfaces
import { PokemonsListResponse, SmallPokemon, PokemonCardProps } from '../interfaces';

const HomePage: NextPage<PokemonCardProps> = ({ pokemons }) => {

  return (
    <>
      <Layout title='Listado de Pokémons'>
        <section>
          <PokemonCards pokemons={pokemons} />
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