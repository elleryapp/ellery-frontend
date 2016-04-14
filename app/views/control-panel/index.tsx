import * as React from 'react'
import Course from '../../components/course'
import {StaggeredMotion, spring} from 'react-motion'
import Input from '../../components/input'
import Alerts from '../../components/alerts'
import {Link} from 'react-router'

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
},
{
  days: 'Mon Wed',
  hours: '5:00PM - 6:15PM',
  title: 'Operating Systems',
  code: 'COP4610',
  room: 'ECS 135',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Nagarajan Prabakar', img: 'http://www.cis.fiu.edu/images/photos/Nagarajan_Prabakar.JPG', phone: '305-348-2033', email: 'prabakar@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
}
,{
  days: 'Tue Thu',
  hours: '6:25PM - 7:40PM',
  title: 'Netcentric Computing',
  code: 'CNT4713',
  room: 'ECS 136',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Xin Sun', img: 'http://www.cis.fiu.edu/images/photos/Xin_Sun.jpg', phone: '305-348-3987', email: 'xinsun@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~xinsun/'}]
},
{
  days: 'Tue Thu',
  hours: '5:00PM - 6:15PM',
  title: 'Software Engineering',
  code: 'COP5431',
  room: 'PG6 115',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Masoud', img: 'http://www.cis.fiu.edu/images/photos/Masoud_milani.JPG', phone: '305-348-2925', email: 'milani@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
}]
  };
  }
    render() {
    var a = {h: 1};
    return (
      <div className={style.cp}>
        <h1>Welcome Back {this.state.name}</h1>
        <div><Input placeholder="Search for Classes" style={{fontSize: '1.2em'}}><Link to='search'>🔎</Link></Input></div>
        <StaggeredMotion defaultStyles={[a, a, a, a]} styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {return i === 0 ? {h: spring(0)} : {h: spring(prevInterpolatedStyles[i - 1]['h'])} })}>
          {interpolatingStyles =>
            <div>
              {interpolatingStyles.map((style, i) => <Course key={i} data={this.state.courses[i]} style={{opacity: (1-style.h), transform: `translateY(${64 * style.h}px)`}} />)}
            </div>
          }
        </StaggeredMotion>
      </div>
    )
  }
}
