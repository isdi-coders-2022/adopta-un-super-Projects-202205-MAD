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
    
    useEffect(() => {
        const favorites = getFavorites(user?.nickname as string);
        // console.log('caca', favorites);
        // console.log('user', user);
        if (user?.nickname === undefined) {
            console.log("No se puede guardar")
        } else {
            console.log("ya podemos guardar")
        }
        
    }, [isAuthenticated]);

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
