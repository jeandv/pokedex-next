import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { FavoritePokemons } from '../../components/pokemon';
import { localFavorites } from '../../utils';

const FavoritesPage = () => {
  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([]);
  const { getPokemonsFavs } = localFavorites;

  useEffect(() => setfavoritePokemons(getPokemonsFavs), [getPokemonsFavs]);

  return (
    <Layout title={'Pokédex | Favoritos'}>
      {
        favoritePokemons.length === 0
          ? <NoFavorites />
          : <FavoritePokemons pokemons={favoritePokemons} />
      }
    </Layout>
  );
};

export default FavoritesPage;