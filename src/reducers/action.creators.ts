import { iFavorites } from '../models/favorites';
import { actionTypes } from './action.types';

export interface iAction {
    type: actionTypes;
    payload?: any;
}

export const loadCharactersAction = (characters: any): iAction => ({
    type: actionTypes['characters@load'],
    payload: characters,
});

export const addCharacterAction = (character: iFavorites): iAction => ({
    type: actionTypes['characters@add'],
    payload: character,
});

export const updateCharacterAction = (character: iFavorites): iAction => ({
    type: actionTypes['characters@update'],
    payload: character,
});

export const deleteCharacterAction = (character: iFavorites): iAction => ({
    type: actionTypes['characters@delete'],
    payload: character,
});
