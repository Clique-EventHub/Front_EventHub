import { POST_CHANNEL, POST_EVENT } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${POST_CHANNEL}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${POST_CHANNEL}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
            };

            break;
        case `${POST_CHANNEL}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

            break;
        case `${POST_EVENT}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${POST_EVENT}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
            };

            break;
        case `${POST_EVENT}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

            break;
        default:
            return state;
    }
    return state
}
