import { ReactElement, useEffect, useReducer, useState } from 'react';
import { CharacterModel } from '../models/characters';
import { homePageCharactersReducer } from '../reducers/reducer';
import * as actions from '../reducers/action.creators'
import { MarvelApi } from '../services/marvelApi';
import { MarvelContext } from './marvel-context';

export function MarvelContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: CharacterModel[] = [];
    const initPagination: number = 0;

    const [homePageCharacters, dispatch] = useReducer(homePageCharactersReducer, initialState);

    const [pagination, setPagination] = useState(initPagination);

    useEffect(() => {
        MarvelApi.getCharacters()
        .then((resp) => {
            dispatch(actions.loadCharactersAction(resp.data.results));
        })
        ;
    }, []);

    function pages(){
        setPagination(20)
    }

    const context = {
        homePageCharacters,
        pagination,
        pages
    };

    return (
        <MarvelContext.Provider value={context}>
            {children}
        </MarvelContext.Provider>
    );
}
