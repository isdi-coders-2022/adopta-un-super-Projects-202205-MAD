import { ReactElement, useEffect, useReducer, useState } from 'react';
import { CharacterModel } from '../models/characters';
import { homePageCharactersReducer } from '../reducers/reducer';
import * as actions from '../reducers/action.creators';
import { MarvelApi } from '../services/marvelApi';
import { MarvelContext } from './marvel-context';

export function MarvelContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: CharacterModel[] = [];
    const initPagination: number = 0;
    const initCharacters: number = 0;

    const [homePageCharacters, dispatch] = useReducer(
        homePageCharactersReducer,
        initialState
    );

    const [pagination, setPagination] = useState(initPagination);

    const [totalCharactersApi, setTotalCharactersApi] =
        useState(initCharacters);

    useEffect(() => {
        MarvelApi.getCharacters(pagination.toString()).then((resp) => {
            dispatch(actions.loadCharactersAction(resp.data.results));
            totalCharactersApiUpdate(resp.data.total);
        });
    }, [pagination]);

    useEffect(() => {
        MarvelApi.getCharacters(pagination.toString()).then((resp) => {
            totalCharactersApiUpdate(resp.data.total);
        });
    }, []);

    function pages(offset: number) {
        setPagination(offset);
    }

    function totalCharactersApiUpdate(total: number) {
        setTotalCharactersApi(total);
    }

    const context = {
        homePageCharacters,
        pagination,
        pages,
        totalCharactersApi,
    };

    return (
        <MarvelContext.Provider value={context}>
            {children}
        </MarvelContext.Provider>
    );
}
