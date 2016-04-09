import * as React from 'react'
import {Link} from 'react-router'

import Input from '../../components/input'
import Icon from '../../components/icon'
import Button from '../../components/button'

var style = require('./style.css');


export class Login extends React.Component<any, any> {
    render() {
    return (
      <div className={style.login}>
        <Input placeholder="Student ID" style={{margin: 8}}/>
        <Input placeholder="Password" type="password" style={{margin: 8}} />
        <Link to='/home'><Button style={{margin: 8, width: 240, padding: 12}}>Login</Button></Link>
      </div>
    )
  }
}
