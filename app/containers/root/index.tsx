import * as React from 'react'
import {Provider} from 'react-redux'
import routes from '../../routes'
import { browserHistory, Router, Route} from 'react-router';

import './reset.css'
import './style.css'

export default class Root extends React.Component<any, any> {
    render () {
        return (
          <div>
            <Provider store={this.props.store}>
              <div>
               <Router history={browserHistory}>
                  {routes}
               </Router>
              </div>
            </Provider>
          </div>
        );
    }
}
