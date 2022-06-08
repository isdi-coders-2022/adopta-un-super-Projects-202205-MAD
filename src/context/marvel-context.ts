import { createContext } from 'react';
import { CharacterModel } from '../models/characters';

const initialContext: {
    homePageCharacters: CharacterModel[];
    pagination: number;
    totalCharactersApi: number;
    pages: (offset: number) => void;
    favoriteCharacters: CharacterModel[];
    addFavorite: (character: CharacterModel) => void;
    getFavorites: (nickname: string) => any;
} = {
    homePageCharacters: [],
    pagination: 0,
    totalCharactersApi: 0,
    pages: () => {},
    favoriteCharacters: [],
    addFavorite: () => {},
    getFavorites: () => {},
};

export const MarvelContext = createContext(initialContext);
