import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { browserHistory, Router, Route}  from 'react-router'

import './reset.css'
import './style.css'

import {App, Login, ControlPanel, Prediction, Roadmap} from './views'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={ControlPanel}/>
      <Route path="/prediction" component={Prediction}/>
      <Route path="/roadmap" component={Roadmap}/>
    </Route>
  </Router>
), document.getElementById('app'));
