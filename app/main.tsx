import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import {loginUserSuccess} from './actions'

const target = document.getElementById('app');
const store = configureStore();

const node = (<Root store={store} />);

let token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
}

ReactDOM.render(node, target);
