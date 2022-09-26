import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';

// Interfaces
import { PokemonCardProps } from '../../interfaces';

export const PokemonCards: FC<PokemonCardProps> = ({ pokemons }) => {

    return (
        <>
            <Grid.Container gap={2} justify='flex-start'>
                {
                    pokemons.map(({ id, name, img }) => {
                        return (
                            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                                <Card isHoverable isPressable>
                                    <Card.Body css={{ p: 1 }}>
                                        <Card.Image
                                            src={img}
                                            alt={`#${id} - ${name}`}
                                            width='100%'
                                            height={140}
                                            objectFit='contain'
                                        />
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row justify='space-between'>
                                            <Text transform='capitalize'>{name}</Text>
                                            <Text>#{id}</Text>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid.Container>
        </>
    )
}