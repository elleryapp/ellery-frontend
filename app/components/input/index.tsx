import * as React from 'react'

var style = require('./style.css');

class Input extends React.Component<any, any> {
  static defaultProps = {
    placeholder: '',
    type: 'text',
    move: true
  }
  constructor(props) {
    super(props);
    this.state = {value: '', focused: false};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  handleFocus = (e) => {
    var s = Object.assign(this.state, {focused: true})
    this.setState(s);
  }

  handleBlur = (e) => {
    var s = Object.assign(this.state, {focused: false})
    this.setState(s);
  }
  render() {
    var labelStyle = {
      opacity: (this.state.value === '' || this.state.focused) ? 1 : 0,
      transform: (this.state.value !== '') ? 'translate(-125%, -8px)' :'translate(0px, 0px)'
    };

    return (
      <div className={style.input} >
        <input type={this.props.type} value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} style={this.props.style}/>
        <label style={labelStyle}>{this.props.placeholder}</label>
        {this.props.children}
      </div>
    )
  }
}

export default Input;
