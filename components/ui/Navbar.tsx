import Image from 'next/image';
import { Navbar, Text } from '@nextui-org/react';
import { SwitchTheme, MyGithub } from '../ui';

export const NavbarSection = () => {

    return (
        <>
            <Navbar variant='floating'>
                <Navbar.Brand>
                    <Image src='/gengar-icon.webp'
                        alt='Icono de mi pokedex'
                        width={70}
                        height={70} />
                    <Text h2 color='inherit' hideIn='xs'>P</Text>
                    <Text h3 color='inherit' hideIn='xs'>OKÉDEX</Text>
                </Navbar.Brand>
                <Navbar.Content enableCursorHighlight
                    activeColor='secondary'
                    variant='highlight-rounded'>
                    <Navbar.Link href='/'>Inicio</Navbar.Link>
                    <Navbar.Link href='#'>Favoritos</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Item>
                        <SwitchTheme />
                    </Navbar.Item>
                    <Navbar.Item>
                        <MyGithub />
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </>
    )
}
