import { Text } from '@nextui-org/react';

export const Title = () => {
    return (
        <section>
            <Text css={{
                textGradient: '45deg, $blue600 -20%, $pink600 100%',
                textAlign: 'center',
                margin: 0
            }}
                h1
                size={60}
                weight='bold'>
                Encuentra
            </Text>
            <Text css={{
                textGradient: '45deg, $blue600 -20%, $pink600 100%',
                textAlign: 'center',
                margin: 0
            }}
                h1
                size={60}
                weight='bold'>
                Tu Pokémon Favorito!
            </Text>
        </section>
    );
};