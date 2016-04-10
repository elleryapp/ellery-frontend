import { checkHttpStatus, parseJSON } from '../utils';
import * as jwtDecode from 'jwt-decode';

import fetch from 'isomorphic-fetch';

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: {
      token: token
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: 'LOGIN_USER_FAILURE',
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserRequest() {
  return {
    type: 'LOGIN_USER_REQUEST'
  }
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: 'LOGOUT_USER'
    }
}

export function logoutAndRedirect() {
    return (dispatch, state) => {
        dispatch(logout());
    }
}

export function loginUser(email, password, redirect="/") {
    return function(dispatch) {
        dispatch(loginUserRequest());
        return fetch('http://localhost:3000/auth/getToken/', {
            method: 'post',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({email: email, password: password})
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                try {
                    let decoded = jwtDecode(response.token);
                    dispatch(loginUserSuccess(response.token));
                } catch (e) {
                    dispatch(loginUserFailure({
                        response: {
                            status: 403,
                            statusText: 'Invalid token'
                        }
                    }));
                }
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}

export function receiveProtectedData(data) {
    return {
        type: 'RECEIVE_PROTECTED_DATA',
        payload: {
            data: data
        }
    }
}

export function fetchProtectedDataRequest() {
  return {
    type: 'FETCH_PROTECTED_DATA_REQUEST'
  }
}

export function fetchProtectedData(token) {

    return (dispatch, state) => {
        dispatch(fetchProtectedDataRequest());
        return fetch('http://localhost:3000/api/login', {
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                dispatch(receiveProtectedData(response.data));
            })
            .catch(error => {
                if(error.response.status === 401) {
                  dispatch(loginUserFailure(error));
                }
            })
       }
}
