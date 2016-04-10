import {createReducer} from '../utils'
import CONSTANTS from '../constants'

const initialState = {
    data: null,
    isFetching: false
};

export default createReducer(initialState, {
    [CONSTANTS.RECEIVE_PROTECTED_DATA]: (state, payload) => {
        return Object.assign({}, state, {
            'data': payload.data,
            'isFetching': false
        });
    },
    [CONSTANTS.FETCH_PROTECTED_DATA_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isFetching': true
        });
    }
});
