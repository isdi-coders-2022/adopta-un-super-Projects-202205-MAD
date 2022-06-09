import { ReactElement, useEffect, useReducer, useState } from 'react';
import { homePageCharactersReducer } from '../reducers/reducer';
import * as actions from '../reducers/action.creators';
import { MarvelApi } from '../services/marvelApi';
import { MarvelContext } from './marvel-context';
import { HttpStoreCharacters } from '../services/http.store.characters';
import { favoritesCharactersReducer } from '../reducers/reducer-store';
import { useAuth0 } from '@auth0/auth0-react';
import { iFavorites } from '../models/favorites';

export function MarvelContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const { isAuthenticated, user } = useAuth0();

    const initialState: iFavorites[] = [];
    const initPagination: number = 0;
    const initCharacters: number = 0;
    const initFavorites: iFavorites[] = [];

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

    useEffect(() => {
        console.log('caca');

        if (isAuthenticated) {
            console.log('LOGIN');

            store.getCharacters(user?.nickname as string).then((resp) => {
                console.log('RESP', resp);

                dispatchFavorites(actions.loadCharactersAction(resp));
            });
        }
    }, [isAuthenticated]);

    function getFavorites(nickname: string) {
        store.getCharacters(nickname).then((resp) => {
            dispatchFavorites(actions.loadCharactersAction(resp[0].favorites));
        });
    }

    function pages(offset: number) {
        setPagination(offset);
    }

    function totalCharactersApiUpdate(total: number) {
        setTotalCharactersApi(total);
    }

    function addFavorite(character: iFavorites) {
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
        user,
    };

    return (
        <MarvelContext.Provider value={context}>
            {children}
        </MarvelContext.Provider>
    );
}
