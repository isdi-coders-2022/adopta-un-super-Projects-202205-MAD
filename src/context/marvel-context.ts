import { User } from '@auth0/auth0-react';
import { createContext } from 'react';
import { iFavorites } from '../models/favorites';



const initialContext: {
    homePageCharacters: iFavorites[];
    pagination: number;
    totalCharactersApi: number;
    pages: (offset: number) => void;
    favoriteCharacters: iFavorites[];
    addFavorite: (character: iFavorites) => void;
    getFavorites: (nickname: string) => any;
    user: User | undefined
} = {
    homePageCharacters: [],
    pagination: 0,
    totalCharactersApi: 0,
    pages: () => {},
    favoriteCharacters: [],
    addFavorite: () => {},
    getFavorites: () => {},
    user: {} 

};

export const MarvelContext = createContext(initialContext);
