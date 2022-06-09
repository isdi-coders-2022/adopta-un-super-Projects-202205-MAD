import { iFavorites } from '../models/favorites';
import { iAction } from './action.creators';
import { actionTypes } from './action.types';

export function favoritesCharactersReducer(
    initialState: Array<iFavorites>,
    action: iAction
) {
    let state: Array<iFavorites> = [];
    switch (action.type) {
        case actionTypes['characters@load']:
            state = action.payload;
            break;
        case actionTypes['characters@add']:
            state = [...initialState, action.payload];
            break;
        case actionTypes['characters@update']:
            state = initialState.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
            break;
        case actionTypes['characters@delete']:
            state = initialState.filter(
                (item) => item.id !== action.payload.id
            );
            break;
        default:
            state = initialState;
    }

    return state;
}
