import { useEffect, useState } from 'react';
import { Container, Text, Image } from '@nextui-org/react'
import { localFavorites } from '../../utils';

export const MyFavorites = () => {

    const [favoritePokemon, setfavoritePokemon] = useState<number[]>([]);
    const { getPokemonsFavs } = localFavorites;

    useEffect(() => {

        setfavoritePokemon(getPokemonsFavs);

    }, []);

    return (
        <Container css={{
            alignItems: 'center',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: 'calc(100vh-100px)',
            justifyContent: 'center',
            marginTop: '120px'
        }}>
            <Text h1>{favoritePokemon}</Text>
            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
                alt='No hay favoritos imagen'
                width={250}
                height={250} />
        </Container>
    )
}
