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
    const [favorites, setFavorites] = useState(initialState)
   

    useEffect(() => {
        MarvelApi.getCharacters(pagination.toString()).then((resp) => {
            const filtered = (resp.data.results).filter(character => character.thumbnail?.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
            
            dispatch(actions.loadCharactersAction(filtered));
            // totalCharactersApiUpdate(resp.data.total);
        });
    }, [pagination]);

    useEffect(() => {
        MarvelApi.getCharacters(pagination.toString()).then((resp) => {
            totalCharactersApiUpdate(resp.data.total);
        });
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            store.getCharacters(user?.nickname as string).then((resp) => {
                dispatchFavorites(actions.loadCharactersAction(resp));
            });
        }
    }, [isAuthenticated]);

    function getFavorites(nickname: string) {
        store.getCharacters(nickname).then((resp) => {
            dispatchFavorites(actions.loadCharactersAction(resp.favorites));
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
    function deleteFavorite(id: iFavorites['id']) {
        store.deleteCharacter(id).then(() => {
            dispatchFavorites(actions.deleteCharacterAction(favoriteCharacters.find((character) => character.id === id) as iFavorites))
        });
    };

    const context = {
        homePageCharacters,
        pagination,
        pages,
        totalCharactersApi,
        favoriteCharacters,
        addFavorite,
        getFavorites,
        deleteFavorite,
        user,
    };

    return (
        <MarvelContext.Provider value={context}>
            {children}
        </MarvelContext.Provider>
    );
}
