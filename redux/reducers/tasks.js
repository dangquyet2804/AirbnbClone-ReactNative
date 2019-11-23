import * as types from '../constants/ActionTypes';
const InitialState = [];

const tasks = (state = InitialState, action) => {
    switch (action.type) {
        case types.ADD_FAVORITE:
            return [...state, action.item]
        case types.REMOVE_FAVORITE:
            // console.log(action.item)
            let newState = state.filter(element => element.id !== action.item.id);
            state = newState
            return state
        default:
            return state
    }
}
export default tasks;