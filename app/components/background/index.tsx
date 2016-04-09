import * as React from 'react'

export class Background extends React.Component<any, any> {
  componentDidMount() {
    var c = this.refs['canvas'];
  }
  render() {
  return (
    <canvas ref='canvas' style={{display: 'none'}}></canvas>
  )
}
}
