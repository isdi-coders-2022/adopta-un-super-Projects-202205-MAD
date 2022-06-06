import { createContext } from 'react';
import { CharacterModel } from '../models/characters';

const initialContext: {
    homePageCharacters: CharacterModel[];
} = {
    homePageCharacters: [],
};

export const MarvelContext = createContext(initialContext);
