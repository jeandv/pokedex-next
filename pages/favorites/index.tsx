import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';

const FavoritesPage = () => {

    return (
        <Layout title={'Pokédex | Favoritos'}>
            <NoFavorites />
        </Layout>
    )
}

export default FavoritesPage;