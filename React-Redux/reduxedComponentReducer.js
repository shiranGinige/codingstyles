import { ACTIONS } from './constants';

const initialState = {
    data: []
};

export default function Snap(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.GET_SOME_DATA_SUCCESS:
            return Object.assign({}, state, { data: action.response });
        default:
            return state;
    }
}
