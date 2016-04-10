import * as React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux';
import {pushState} from 'redux-router';
import {StaggeredMotion, spring} from 'react-motion'

import Input from '../../components/input'
import Icon from '../../components/icon'
import Button from '../../components/button'

var style = require('./style.css');

var children = [
  <Input placeholder="Student ID" style={{margin: 8}}/>,
  <Input placeholder="Password" type="password" style={{margin: 8}} />,
  <Link to='/home'><Button style={{margin: 8, width: 240, padding: 12}}>Login</Button></Link>
]

export class Login extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      err: [],
      submit: false
    };
  }

  render() {
      var a = {h: 1};
    return (
      <div className={style.login}>
      <StaggeredMotion defaultStyles={[a, a, a]} styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {return i === 0 ? {h: spring(0)} : {h: spring(prevInterpolatedStyles[i - 1]['h'])} })}>
        {interpolatingStyles =>
          <div>
            {interpolatingStyles.map((style, i) =>
              <div key={i} style={{opacity: (1-style.h), transform: `translateY(${64 * style.h}px)`}} >
                {children[i]}
              </div>)
            }
          </div>
        }
      </StaggeredMotion>
      </div>
    )
  }
}
