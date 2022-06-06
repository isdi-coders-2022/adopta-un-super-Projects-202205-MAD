import { ReactElement, useEffect, useState } from 'react';
import { CharacterModel } from '../models/characters';
import { MarvelApi } from '../services/marvelApi';
import { MarvelContext } from './marvel-context';

export function MarvelContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: CharacterModel[] = [];
    const [homePageCharacters, setHomePageCharacters] = useState(initialState);

    useEffect(() => {
        MarvelApi.getCharacters()
        .then((resp) => {
            setHomePageCharacters(resp.data.results);
        })
        ;
    }, []);

    const context = {
        homePageCharacters,
    };

    return (
        <MarvelContext.Provider value={context}>
            {children}
        </MarvelContext.Provider>
    );
}
