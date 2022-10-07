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
        <title>{title}</title>
        <meta name='author' content='Jean Rondón' />
        <meta name='description' content='Hola, me llamo Jean Rondón y esto es una pokédex hecha con Next.js + TypeScript. Buscame en mi Linkedin y GitHub como Jeandv.' />
        <meta name='keywords' content='Jeandv, Jeandv pokedex, Jeandv pokemon, Jean pokemon, pokedex' />
        <link rel='icon' href='/meowth.ico' />
      </Head>
      <NavbarSection />
      <main style={{ padding: '0 30px' }}>
        {children}
      </main>
    </>
  );
};