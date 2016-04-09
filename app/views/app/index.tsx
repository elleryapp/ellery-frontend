import * as React from 'react';

import {Login} from '../login'

import './style.css';

export class App extends React.Component<any, any> {
  render() {
    return (
      <div className='full'>
        {this.props.children || <Login/>}
      </div>
    )
  }
}
