import { useContext } from 'react';
import { CardList } from '../components/cardList';
import LoginButton from '../components/login/login';
import { MarvelContext } from '../context/marvel-context';

export function HomePage() {
    const { pagination, pages, totalCharactersApi, homePageCharacters } =
        useContext(MarvelContext);

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
