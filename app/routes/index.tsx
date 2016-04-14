import * as React from 'react'
import {Route, IndexRoute} from 'react-router'
import {requireAuthentication} from '../components/authenticated'
import {App, ControlPanel, Progress, Roadmap} from '../views'

export default(
      <Route path="/" component={App}>
        <Route path="/home" component={ControlPanel}/>
        <Route path="/progress" component={Progress}/>
        <Route path="/enroll" component={Roadmap}/>
        <Route path="/search" component={Roadmap}/>
      </Route>
);
