import rootReducer from '../reducers'
import * as thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import routes from '../routes'
import {reduxReactRouter} from 'redux-router'
import {applyMiddleware, compose, createStore} from 'redux'
import * as createLogger from 'redux-logger'

export default function configureStore() {
    let createStoreWithMiddleware;

    const logger = createLogger();

    const middleware = applyMiddleware(thunk, logger);

    createStoreWithMiddleware = compose(middleware, reduxReactRouter({routes, browserHistory}));

    const store = createStoreWithMiddleware(createStore)(rootReducer);

    return store;

}
