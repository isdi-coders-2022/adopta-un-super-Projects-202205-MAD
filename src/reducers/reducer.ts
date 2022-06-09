// Funcion pura
// recibe un estado y una accion
// retorna un NUEVO estado (NO HAY MUTACION)

import { iFavorites } from '../models/favorites';
import { iAction } from './action.creators';
import { actionTypes } from './action.types';

export function homePageCharactersReducer(
    initialState: Array<iFavorites>,
    action: iAction
) {
    let state: Array<iFavorites> = [];
    switch (action.type) {
        case actionTypes['characters@load']:
            state = action.payload;
            break;
        default:
            state = initialState;
    }

    return state;
}
