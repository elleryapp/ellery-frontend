import * as React from 'react'

var style = require('./style.css');

class Input extends React.Component<any, any> {
  static defaultProps = {
    placeholder: '',
    type: 'text'
  }
    render() {
    return (
      <div className={style.input} style={this.props.style}>
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    )
  }
}

export default Input;
