import { ReactElement, useEffect, useReducer, useState } from 'react';
import { CharacterModel } from '../models/characters';
import { homePageCharactersReducer } from '../reducers/reducer';
import * as actions from '../reducers/action.creators';
import { MarvelApi } from '../services/marvelApi';
import { MarvelContext } from './marvel-context';
import { HttpStoreCharacters } from '../services/http.store.characters';
import { favoritesCharactersReducer } from '../reducers/reducer-store';

export function MarvelContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: CharacterModel[] = [];
    const initPagination: number = 0;
    const initCharacters: number = 0;
    const initFavorites: CharacterModel[] = [];
    const initDetails: CharacterModel = new CharacterModel('sd', 'sd', 'we', 1);


    const [homePageCharacters, dispatch] = useReducer(
        homePageCharactersReducer,
        initialState
    );

    const [pagination, setPagination] = useState(initPagination);

    const [totalCharactersApi, setTotalCharactersApi] =
        useState(initCharacters);

           // for the deatils page  
    const [details, setDetails] = useState(initDetails); 

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
        store.getCharacters().then((resp) => {
            dispatchFavorites(actions.loadCharactersAction(resp));
        });
    }, []);

    function pages(offset: number) {
        setPagination(offset);
    }

    function totalCharactersApiUpdate(total: number) {
        setTotalCharactersApi(total);
    }

    function addFavorite(character: CharacterModel){
        store.setCharacter(character).then((resp) => {
            dispatchFavorites(actions.addCharacterAction(resp));
        });

        // dispatchFavorites(actions.addCharacterAction(character));
    }

    function addDetails(character: CharacterModel){
        setDetails(character)
    }

    const context = {
        homePageCharacters,
        pagination,
        pages,
        totalCharactersApi,
        favoriteCharacters,
        addFavorite,
        details,
        addDetails
    };

    return (
        <MarvelContext.Provider value={context}>
            {children}
        </MarvelContext.Provider>
    );
}
