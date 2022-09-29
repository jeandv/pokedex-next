import NextLink from 'next/link';
import Image from 'next/image';
import { Link, Navbar, Text } from '@nextui-org/react';
import { SwitchTheme, GithubRepo } from '../ui';

export const NavbarSection = () => {
    return (
        <>
            <Navbar variant='sticky'>
                <Navbar.Brand>
                    <NextLink href='/' passHref>
                        <Link style={{ color: '#fff' }}>
                            <Image src='/gengar-icon.webp'
                                alt='Icono de mi pokedex'
                                width={70}
                                height={70} />
                            <Text h2 color='inherit' hideIn='xs'>P</Text>
                            <Text h3 color='inherit' hideIn='xs'>OKÉDEX</Text>
                        </Link>
                    </NextLink>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Item>
                        <Navbar.Link href='/favorites'>Favoritos</Navbar.Link>
                    </Navbar.Item>
                    <Navbar.Item>
                        <SwitchTheme />
                    </Navbar.Item>
                    <Navbar.Item>
                        <GithubRepo />
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
        </>
    )
}