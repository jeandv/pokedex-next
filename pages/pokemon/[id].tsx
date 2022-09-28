import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Layout } from '../../components/layouts';
import { pokeApi } from '../../api';

// Interfaces
import { Pokemon } from '../../interfaces';
interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const { name } = pokemon;

    return (
        <Layout title='Algun pokemon'>
            <h1>{name}</h1>
        </Layout>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}


export default PokemonPage;