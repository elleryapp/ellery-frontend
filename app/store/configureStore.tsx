import rootReducer from '../reducers'
import * as thunk from 'redux-thunk'
import routes from '../routes'
import {reduxReactRouter} from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import {applyMiddleware, compose, createStore} from 'redux'
import * as createLogger from 'redux-logger'

export default function configureStore() {
    let createStoreWithMiddleware;

    const logger = createLogger();

    const middleware = applyMiddleware(thunk, logger);

    createStoreWithMiddleware = compose(
     middleware,
     reduxReactRouter({routes, createHistory})
    );

    const store = createStoreWithMiddleware(createStore)(rootReducer);

    return store;

}
