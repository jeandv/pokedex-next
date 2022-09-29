import { NextPage } from 'next';
import { Grid, Card, Button, Container, Image, Text } from '@nextui-org/react'
import { Layout } from '../layouts';

// Interfaces
import { PokemonDetailsCardProps } from '../../pages/pokemon/[id]';

export const PokemonDetailsCard: NextPage<PokemonDetailsCardProps> = ({ pokemon }) => {

    const { name, sprites } = pokemon;

    const imagePokemon = sprites.other?.['official-artwork'].front_default;

    const spritesPokemon = [
        sprites.front_default,
        sprites.back_default,
        sprites.front_shiny,
        sprites.back_shiny
    ];

    return (
        <Layout title={`Pokédex | ${name}`}>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={imagePokemon || '/no-image.png'}
                                alt={name}
                                width='100%'
                                height={200} />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card css={{ padding: '0 30px' }}>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>{name}</Text>
                            <Button color='gradient' ghost>Guardar en favoritos</Button>
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container display='flex' direction='row'>
                                {spritesPokemon.map((spritePokemon => {
                                    return (
                                        <Image key={name}
                                            src={spritePokemon}
                                            alt={name}
                                            width={100}
                                            height={200} />
                                    )
                                }))}
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}