import * as React from 'react'

import {Hero} from '../hero'
import {Background} from '../background'

import './reset.css'
import './style.css'

class App extends React.Component<any, any> {
    render() {
    return (
      <div className='full'>
        <Hero shrink={null != this.props.children}/>
        {this.props.children}
        <Background />
      </div>
    )
  }
}

export default App;
