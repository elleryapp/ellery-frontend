import * as React from 'react'

var style = require('./style.css');

class Input extends React.Component<any, any> {
  static defaultProps = {
    placeholder: '',
    type: 'text'
  }
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div className={style.input} style={this.props.style}>
        <input type={this.props.type} placeholder={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default Input;
