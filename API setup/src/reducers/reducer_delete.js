import { DELETE_CHANNEL, DELETE_EVENT } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    response_channel: null,
    response_event: null
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${DELETE_CHANNEL}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${DELETE_CHANNEL}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                response_channel: action.payload.data
            };

            break;
        case `${DELETE_CHANNEL}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

            break;
        case `${DELETE_EVENT}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${DELETE_EVENT}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                response_event: action.payload.data
            };

            break;
        case `${DELETE_EVENT}_REJECTED`:
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
