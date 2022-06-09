import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect } from 'react';
import { CardList } from '../components/cardList';
import { MarvelContext } from '../context/marvel-context';

export function HomePage() {
    const {
        pagination,
        pages,
        totalCharactersApi,
        homePageCharacters,
        getFavorites,
    } = useContext(MarvelContext);
    const { isAuthenticated, user } = useAuth0();

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
