import * as React from 'react'
import Course from '../../components/course'
import Input from '../../components/input'
var {LineChart, XAxis, Tooltip, CartesianGrid, Line} = require('recharts');

var style = require('./style.css');
var p =  {
  days: 'Tue Thu',
  hours: '5:00PM - 6:15PM',
  title: 'Software Engineering',
  code: 'COP5431',
  room: 'PG6 115',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Gregory Shaw', img: 'http://www.cis.fiu.edu/images/photos/Greg_Shaw.JPG', phone: '305-348-2925', email: 'gshaw@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
};

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];

// <img src="/assets/progress-placeholder.svg" alt="roadmap"/>

export class Roadmap extends React.Component<any, any> {
    render() {
    return (
      <div className='full'>
          <h1>Search</h1>
          <div><Input placeholder="Search for Classes" style={{fontSize: '1.2em'}}>🔎</Input></div>
          <LineChart
  width={400}
  height={400}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>\
          <Course data={p}/>
      </div>
    )
  }
}
