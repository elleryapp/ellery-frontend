import * as React from 'react'
import Course from '../../components/course'

var style = require('./style.css');

export class ControlPanel extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {name: 'Alain Galvan', courses: [{
      days: 'Mon Wed',
      hours: '3:30PM - 4:45PM',
      title: 'Logic for Computer Science',
      code: 'COT3541',
      room: 'ECS 143',
      coordinates: {lat: 10124.12241, lon: 1221412.22},
      instructors: [{name: 'Alexander Pelin', img: 'http://www.cis.fiu.edu/images/photos/Alex_Pelin.JPG', phone: '305-348-2925', email: 'pelina@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
    }]
  };
  }
    render() {
    return (
      <div className={style.cp}>
        <h1>Welcome Back {this.state.name}</h1>
        {
          this.state.courses.map((p, i) => {
            return (
              <Course key={i} data={p}/>
            )})
}
      </div>
    )
  }
}
