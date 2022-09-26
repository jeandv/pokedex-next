import { FC } from 'react';
import Head from 'next/head';
import { NavbarSection } from '../ui';

interface LayoutProps {
    children: JSX.Element;
    title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name='author' content='Jean Rondón' />
                <meta name='description' content='Esto es una pokedex hecha con Next.js y TypeScript.' />
                <meta name='keywords' content='Jeandv, Jeandv pokedex, Jeandv pokemon, Jean pokemon, pokedex' />
            </Head>

            <NavbarSection />

            <main style={{
                padding: '0 30px'
            }}>
                {children}
            </main>
        </>
    )
}