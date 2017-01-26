import { FETCH_CHANNEL, FETCH_EVENT } from '../actions/index';

const initalState = {
    fetching: false,
    fetched: false,
    error: null,
    channel: [],
    event: []
}

export default ( state = initalState, action ) => {
    switch (action.type) {
        case `${FETCH_CHANNEL}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${FETCH_CHANNEL}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                channel: action.payload.data
            };

            break;
        case `${FETCH_CHANNEL}_REJECTED`:
            return {
                ...state,
                fetching: false,
                error: action.payload
            };

            break;
        case `${FETCH_EVENT}_PENDING`:
            return {
                ...state,
                fetching: true,
                error: null,
            };

            break;
        case `${FETCH_EVENT}_FULFILLED`:
            return {
                ...state,
                fetching: false,
                fetched: true,
                error: null,
                event: action.payload.data
            };

            break;
        case `${FETCH_EVENT}_REJECTED`:
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
