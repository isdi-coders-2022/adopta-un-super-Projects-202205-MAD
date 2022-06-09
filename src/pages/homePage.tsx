import { useAuth0 } from '@auth0/auth0-react';
import { useContext } from 'react';
import { CardList } from '../components/cardList';
import { MarvelContext } from '../context/marvel-context';

export function HomePage() {
    const { pagination, pages, totalCharactersApi, homePageCharacters, favoriteCharacters } =
        useContext(MarvelContext);
const {isAuthenticated} = useAuth0()

    // Comprobar si user está autenticado

    // Si no está autenticado paso a CardList homePageCharcaters
    
    // Si está autenticado ejecuto una función que añade propiedad fav a los personajes que son favs del user contrastando con api local

    const updatedWithFavStatus = () => {
        return homePageCharacters.map(char => favoriteCharacters.some(item => item.name === char.name ) ? {...char, favorite: true} : char)
    }

    return (
        <>
            <CardList characters={isAuthenticated ? updatedWithFavStatus() :   homePageCharacters}></CardList>

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
