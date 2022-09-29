import { Text } from '@nextui-org/react';

export const Title = () => {
    return (
        <section>
            <Text
                h1
                size={60}
                css={{
                    textGradient: '45deg, $blue600 -20%, $pink600 100%',
                    textAlign: 'center',
                    margin: 0
                }}
                weight='bold'>
                Encuentra
            </Text>
            <Text
                h1
                size={60}
                css={{
                    textGradient: '45deg, $blue600 -20%, $pink600 100%',
                    textAlign: 'center',
                    margin: 0
                }}
                weight='bold'>
                Tu Pokémon Favorito!
            </Text>
        </section>
    );
}