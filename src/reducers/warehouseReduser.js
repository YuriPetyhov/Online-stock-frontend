import { GET_CURRENT_WAREHOUSES } from '../actions/types';

const initialState = [];

export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_CURRENT_WAREHOUSES :
            return action.payload;
        default:
            return state;
    }
}