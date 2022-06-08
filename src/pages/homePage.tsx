import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { CardList } from '../components/cardList';
import LoginButton from '../components/login/login';
import { MarvelContext } from '../context/marvel-context';

export function HomePage() {
    const { isAuthenticated, user } = useAuth0();
    console.log(isAuthenticated);
    console.log(user);

    const {
        pagination,
        pages,
        totalCharactersApi,
        homePageCharacters,
        getFavorites,
    } = useContext(MarvelContext);

    const favorites = getFavorites(user?.nickname as string);

    return (
        <>
            <CardList characters={homePageCharacters}></CardList>

            {pagination === 0 ? (
                ''
            ) : (
                <button
                    onClick={() => {
                        pages(pagination - 20);
                    }}
                >
                    Back
                </button>
            )}
            {pagination > totalCharactersApi - 20 ? (
                ''
            ) : (
                <button
                    onClick={() => {
                        pages(pagination + 20);
                    }}
                >
                    Next
                </button>
            )}
        </>
    );
}
