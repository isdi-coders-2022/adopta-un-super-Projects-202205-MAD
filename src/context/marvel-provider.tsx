import { ReactElement, useEffect, useReducer } from 'react';
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



    // const [homePageCharacters, setHomePageCharacters] = useState(initialState);

    const [homePageCharacters, dispatch] = useReducer(homePageCharactersReducer, initialState);

    useEffect(() => {
        MarvelApi.getCharacters()
        .then((resp) => {
            // dispatch(actions.loadCharactersAction(resp.data.results)); 
            dispatch(actions.loadCharactersAction(resp.data.results));
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
