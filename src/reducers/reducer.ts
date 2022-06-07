// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { CharacterModel } from '../models/characters';
import { iAction } from './action.creators';
import { actionTypes } from './action.types';

export function homePageCharactersReducer(
    initialState: Array<CharacterModel>,
    action: iAction
) {
    let state: Array<CharacterModel> = [];
    switch (action.type) {
        case actionTypes['characters@load']:
            state = action.payload;
            break;
        default:
            state = initialState;
    }

    return state;
}
