import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { PokemonDetailsCard } from '../../components/pokemon';
import { getPokemonInfo } from '../../utils';

// interfaces
import { Pokemon } from '../../interfaces';

export interface PokemonDetailsCardProps {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonDetailsCardProps> = ({ pokemon }) => <PokemonDetailsCard pokemon={pokemon} />;

export const getStaticPaths: GetStaticPaths = async () => {

    const pokemonsPathsId = [...Array(151)].map((value, index) => ({ params: { id: `${index + 1}` } }));

    return {
        paths: pokemonsPathsId,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo(id);

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

export default PokemonPage;