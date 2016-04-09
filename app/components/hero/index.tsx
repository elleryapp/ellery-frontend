import * as React from 'react';
import { Link } from 'react-router';

var style = require('./style.css');

/**
 * The Header/Hero for Alain.xyz
 */
export class Hero extends React.Component<any, any> {
  static defaultProps = { shrink: false };
  constructor(props) {
    super(props);
  }
  render() {
    var height = {height: (this.props.shrink) ? '120px': '100%'};
    return (
    <div className={style.hero} style={height}>
      <span/>
      <a href='https://github.com/alaingalvan'>Portfolio</a>
      <a href='https://alaingalvan.tumblr.com'>Blog</a>
      <Link to='/'>
        <img src="/assets/brand/ag-logo.svg" alt="Logo"/>
      </Link>
      <Link to='/about'>About</Link>
      <a href="mailto:me@alain.xyz">Contact</a>
      <span/>
    </div>
    )
  }
}
