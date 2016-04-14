import * as React from 'react';
import {Link} from 'react-router';

var style = require('./style.css');

import Icon from '../icon';

export default class SidebarContent extends React.Component<any, any> {
  render() {
    return (
      <div className={style.sidebar}>
        <Link to='/home'><Icon type='menu' size={48}/></Link>
        <Link to='/progress'><Icon type='progress' size={48}/></Link>
        <Link to='/search'><Icon type='search' size={48}/></Link>
        <Link to='/enroll'><Icon type='cart' size={48}/></Link>
      </div>
    );
  }
}
