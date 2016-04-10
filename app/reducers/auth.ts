import {createReducer} from '../utils';
import CONSTANTS from '../constants';
import {pushState} from 'redux-router';
import * as jwtDecode from 'jwt-decode';

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
};

export default createReducer(initialState, {
    [CONSTANTS.LOGIN_USER_REQUEST]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': true,
            'statusText': null
        });
    },
    [CONSTANTS.LOGIN_USER_SUCCESS]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': true,
            'token': payload.token,
            'userName': jwtDecode(payload.token).userName,
            'statusText': 'You have been successfully logged in.'
        });

    },
    [CONSTANTS.LOGIN_USER_FAILURE]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticating': false,
            'isAuthenticated': false,
            'token': null,
            'userName': null,
            'statusText': `Authentication Error: ${payload.status} ${payload.statusText}`
        });
    },
    [CONSTANTS.LOGOUT_USER]: (state, payload) => {
        return Object.assign({}, state, {
            'isAuthenticated': false,
            'token': null,
            'userName': null,
            'statusText': 'You have been successfully logged out.'
        });
    }
});
