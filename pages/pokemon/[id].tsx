import { NextPage, GetStaticProps, GetStaticPaths } from 'next';;
import { pokeApi } from '../../api';
import { PokemonDetailsCard } from '../../components/pokemon';

// interfaces
import { Pokemon } from '../../interfaces';
export interface PokemonDetailsCardProps {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<PokemonDetailsCardProps> = ({ pokemon }) => <PokemonDetailsCard pokemon={pokemon} />;

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