import * as React from 'react'
import {StaggeredMotion, spring} from 'react-motion'
import Course from '../../components/course'
import Button from '../../components/button'
import Icon from '../../components/icon'
import Modal from '../../components/modal'
var style = require('./style.css');

export class Enroll extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {name: 'Alain Galvan', modal: false, courses: [{
      days: 'Mon',
      hours: '3:30PM - 4:45PM',
      title: 'Senior Project',
      code: 'CIS4911',
      room: 'PG6 112',
      coordinates: {lat: 10124.12241, lon: 1221412.22},
      instructors: [{name: 'Seyedmasoud Sadjadi', img: 'http://www.cis.fiu.edu/images/photos/Sadjadi.jpg', phone: '305-348-1835', email: 'sadjadi@cis.fiu.edu', url: 'http://www.cis.fiu.edu/~sadjadi'}]
    }]
  };
  }

  displayModal = (e) => {
      this.setState(Object.assign(this.state, {modal: !this.state.modal}));
  }

  render()  {
    var a = {h: 1};
    return (
    <div className={style.enroll}>
      <Modal isOpen={this.state.modal}>lolwat</Modal>
      <h1>Enroll - Fall 2016 <a onClick={this.displayModal}><Icon type="cog"/></a></h1>
      <StaggeredMotion defaultStyles={[a]} styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {return i === 0 ? {h: spring(0)} : {h: spring(prevInterpolatedStyles[i - 1]['h'])} })}>
        {
          interpolatingStyles =>
          <div>
            {interpolatingStyles.map((style, i) =>
              <div style={{display: 'flex', alignItems: 'center'}}>
              <Course key={i} data={this.state.courses[i]} style={{opacity: (1-style.h), transform: `translateY(${64 * style.h}px)`}} />
              <a style={{lineHeight: '32px', display: 'inline-block', textAlign: 'center', width: 32, height: 32, borderRadius: '100%', backgroundColor: '#4c8bbf'}}>-</a>
              </div>
            )}
          </div>
        }
      </StaggeredMotion>
      <Button style={{margin: 16, width: 240, padding: 12}}>Enroll</Button>
    </div>);
  }
}
