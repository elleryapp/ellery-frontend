import * as React from 'react'

var style = require('./style.css');

class Input extends React.Component<any, any> {
  static defaultProps = {
    placeholder: '',
    type: 'text'
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
    return (
      <div className={style.input} >
        <input type={this.props.type} value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} onBlur={this.handleBlur} style={this.props.style}/>
        <label style={{opacity: (this.state.value === '' || this.state.focused) ? 1 : 0}}>{this.props.placeholder}</label>
        {this.props.children}
      </div>
    )
  }
}

export default Input;
