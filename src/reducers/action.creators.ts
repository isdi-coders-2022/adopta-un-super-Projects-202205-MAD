import { CharacterModel } from '../models/characters';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadCharactersAction = (characters: Array<CharacterModel>): iAction => ({
    type: actionTypes['characters@load'],
    payload: characters,
});

export const addCharacterAction = (character: CharacterModel): iAction => ({
    type: actionTypes['characters@add'],
    payload: character,
});

export const updateCharacterAction = (character: CharacterModel): iAction => ({
    type: actionTypes['characters@update'],
    payload: character,
});

export const deleteCharacterAction = (character: CharacterModel): iAction => ({
    type: actionTypes['characters@delete'],
    payload: character,
});
