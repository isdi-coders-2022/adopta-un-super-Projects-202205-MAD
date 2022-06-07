import { createContext } from 'react';
import { CharacterModel } from '../models/characters';

const initialContext: {
    homePageCharacters: CharacterModel[];
    pagination: number;
    totalCharactersApi: number;
    pages: (offset: number) => void;
    favoriteCharacters: CharacterModel[];
} = {
    homePageCharacters: [],
    pagination: 0,
    totalCharactersApi: 0,
    pages: () => {},
    favoriteCharacters: [],
};

export const MarvelContext = createContext(initialContext);
