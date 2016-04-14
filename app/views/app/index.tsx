import * as React from 'react';

import {Login} from '../login'
import Sidebar from '../../components/sidebar'
import SidebarContent from '../../components/sidebar-content'

import './style.css';

export class App extends React.Component<any, any> {
  render() {
    console.log(this.props.children);
    return (
      <Sidebar sidebar={<SidebarContent/>} docked={this.props.children !== null}>
        {this.props.children || <Login/>}
      </Sidebar>
    )
  }
}
