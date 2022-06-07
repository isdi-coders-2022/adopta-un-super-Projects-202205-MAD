import { createContext } from 'react';
import { CharacterModel } from '../models/characters';

const initialContext: {
    homePageCharacters: CharacterModel[];
    pagination: number ;
    pages: (offset: number) => void;
} = {
    homePageCharacters: [],
    pagination: 0,
    pages: () => {}
};

export const MarvelContext = createContext(initialContext);
