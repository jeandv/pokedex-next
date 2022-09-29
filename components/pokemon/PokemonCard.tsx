import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';

// Interfaces
import { PokemonCardProp } from '../../interfaces';

export const PokemonCard: FC<PokemonCardProp> = ({ pokemon }) => {

    const { id, name, img } = pokemon;
    const router = useRouter();

    const onClickDetailPokemon = () => router.push(`/pokemon/${id}`);

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card isHoverable isPressable onClick={onClickDetailPokemon}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={img}
                        alt={`#${id} - ${name}`}
                        width='100%'
                        height={140}
                        objectFit='contain' />
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
}