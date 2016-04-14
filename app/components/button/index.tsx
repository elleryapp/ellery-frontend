import * as React from 'react';

var style = require('./style.css');

class Button extends React.Component<any, any> {
  render() {
    return <span className={style.btn} style={this.props.style}> {this.props.children}</span>
  }
}

export default Button;
