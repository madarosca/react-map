import { AUTH_ERROR } from 'constants/action-types';

const initialState = {
    error: '',
    username: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}