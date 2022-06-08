import { ReactElement, useEffect, useReducer, useState } from 'react';
import { CharacterModel } from '../models/characters';
import { homePageCharactersReducer } from '../reducers/reducer';
import * as actions from '../reducers/action.creators';
import { MarvelApi } from '../services/marvelApi';
import { MarvelContext } from './marvel-context';
import { HttpStoreCharacters } from '../services/http.store.characters';
import { favoritesCharactersReducer } from '../reducers/reducer-store';
import { useAuth0 } from '@auth0/auth0-react';

export function MarvelContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: CharacterModel[] = [];
    const initPagination: number = 0;
    const initCharacters: number = 0;
    const initFavorites: CharacterModel[] = [];

    const [homePageCharacters, dispatch] = useReducer(
        homePageCharactersReducer,
        initialState
    );

    const [pagination, setPagination] = useState(initPagination);

    // for the deatils page

    const [totalCharactersApi, setTotalCharactersApi] =
        useState(initCharacters);

    const store = new HttpStoreCharacters();
    const [favoriteCharacters, dispatchFavorites] = useReducer(
        favoritesCharactersReducer,
        initFavorites
    );

    useEffect(() => {
        MarvelApi.getCharacters(pagination.toString()).then((resp) => {
            dispatch(actions.loadCharactersAction(resp.data.results));
            // totalCharactersApiUpdate(resp.data.total);
        });
    }, [pagination]);

    useEffect(() => {
        MarvelApi.getCharacters(pagination.toString()).then((resp) => {
            totalCharactersApiUpdate(resp.data.total);
        });
    }, []);

    function getFavorites(nickname: string) {
        store.getCharacters(nickname).then((resp) => {
            dispatchFavorites(actions.loadCharactersAction(resp));
        });
    }

    function pages(offset: number) {
        setPagination(offset);
    }

    function totalCharactersApiUpdate(total: number) {
        setTotalCharactersApi(total);
    }

    function addFavorite(character: CharacterModel) {
        store.setCharacter(character).then((resp) => {
            dispatchFavorites(actions.addCharacterAction(resp));
        });
    }

    const context = {
        homePageCharacters,
        pagination,
        pages,
        totalCharactersApi,
        favoriteCharacters,
        addFavorite,
        getFavorites,
    };

    return (
        <MarvelContext.Provider value={context}>
            {children}
        </MarvelContext.Provider>
    );
}
