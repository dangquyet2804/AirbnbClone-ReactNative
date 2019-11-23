import * as types from '../constants/ActionTypes';
export const addFavorite = (item) => {
    return {
        type: types.ADD_FAVORITE,
        item
    }
}
export const removeFavorite = (item) => {
    return {
        type: types.REMOVE_FAVORITE,
        item
    }
}