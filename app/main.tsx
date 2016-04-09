import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory, Router, Route}  from 'react-router';

import App from './components/app'
import Portfolio from './components/portfolio'
import Blog from './components/blog'
import About from './components/about'

require('./typekit');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/blog" component={Blog}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
