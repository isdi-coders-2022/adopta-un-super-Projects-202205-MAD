import { createContext } from 'react';
import { CharacterModel } from '../models/characters';

const initialContext: {
    homePageCharacters: CharacterModel[];
    pagination: number;
    totalCharactersApi: number;
    pages: (offset: number) => void;
    favoriteCharacters: CharacterModel[];
    addFavorite: (character: CharacterModel) => void;
    addDetails: (character: CharacterModel) => void;
    details: CharacterModel
} = {
    homePageCharacters: [],
    pagination: 0,
    totalCharactersApi: 0,
    pages: () => {},
    favoriteCharacters: [],
    addFavorite: () => {},
    addDetails: () => {},
    details: new CharacterModel('sd', 'sd', 'we', 1)
};

export const MarvelContext = createContext(initialContext);
