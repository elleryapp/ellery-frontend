import React from 'react'
import {Route, IndexRoute} from 'react-router'
import {App} from '../containers'
import {HomeView, LoginView, ProtectedView} from '../views'
import {requireAuthentication} from '../components/AuthenticatedComponent'
import {App, Login, ControlPanel, Prediction, Roadmap} from './views'

export default(
      <Route path="/" component={App}>
        <Route path="/home" component={ControlPanel}/>
        <Route path="/prediction" component={requireAuthentication(Prediction)}/>
        <Route path="/roadmap" component={requireAuthentication(Roadmap)}/>
      </Route>
);
