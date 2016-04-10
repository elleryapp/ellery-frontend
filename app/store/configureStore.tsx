import rootReducer from '../reducers'
import { browserHistory } from 'react-router'
import routes from '../routes'
import {applyMiddleware, compose, createStore} from 'redux'

var thunk = require('redux-thunk').default;

export default function configureStore() {
    let createStoreWithMiddleware;

    const middleware = applyMiddleware(thunk);

    createStoreWithMiddleware = compose(middleware);

    const store = createStoreWithMiddleware(createStore)(rootReducer);

    return store;

}
