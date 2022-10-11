import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { PokemonDetailsCard } from '../../components/pokemon';
import { get151Pokemons, getPokemonInfo } from '../../utils';

// interfaces
import { Pokemon } from '../../interfaces';

export interface PokemonDetailsCardProps {
  pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<PokemonDetailsCardProps> = ({ pokemon }) => <PokemonDetailsCard pokemon={pokemon} />;

export const getStaticPaths: GetStaticPaths = async () => {

  const { results } = await get151Pokemons();

  const pokemonsPathsName = results.map(item => ({ params: { name: `${item.name}` } }));

  return {
    paths: pokemonsPathsName,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    },
    revalidate: 86400
  }
}

export default PokemonByNamePage;