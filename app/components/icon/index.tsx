import * as React from 'react'
import IconPaths from './icon-paths'

class Icon extends React.Component<any, any> {
    static defaultProps = {size: 16};
    private icons:any;
    constructor(props) {
      super(props);
      this.state = {paths: IconPaths[props.type]};
    }
  render() {
    var styles = {
      fill: "currentcolor",
      verticalAlign: "middle",
      width: this.props.size,
      height: this.props.size
    };
    return (
      <svg viewBox="0 0 16 16" style={styles}>
        <g>
        {this.state.paths.map((p, i) => { return <path key={i} d={p}/>})}
        </g>
      </svg>
    );
  }
}

export default Icon;
