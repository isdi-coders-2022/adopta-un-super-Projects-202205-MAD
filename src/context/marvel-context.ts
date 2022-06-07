import { createContext } from 'react';
import { CharacterModel } from '../models/characters';

const initialContext: {
    homePageCharacters: CharacterModel[];
    pagination: number ;
} = {
    homePageCharacters: [],
    pagination: 0
};

export const MarvelContext = createContext(initialContext);
