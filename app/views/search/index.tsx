import * as React from 'react'
import Course from '../../components/course'
import Input from '../../components/input'
var  { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, XAxis, YAxis, Tooltip, Legend } = require('recharts');

var style = require('./style.css');

var rating = [
  '⭐⭐⭐⭐',
  '⭐⭐⭐',
  '⭐⭐⭐⭐⭐',
  '⭐'
]

var p =  [{
  days: 'Tue Thu',
  hours: '5:00PM - 6:15PM',
  title: 'Programming 1',
  code: 'COP2210',
  room: 'PG6 115',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Gregory Shaw', img: 'http://www.cis.fiu.edu/images/photos/Greg_Shaw.JPG', phone: '305-348-2925', email: 'gshaw@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
}, {
  days: 'Tue Thu',
  hours: '11:00AM - 12:15PM',
  title: 'Programming 1',
  code: 'COP2210',
  room: 'PG6 115',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Gregory Shaw', img: 'http://www.cis.fiu.edu/images/photos/Greg_Shaw.JPG', phone: '305-348-2925', email: 'gshaw@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
}, {
  days: 'Mon Wed',
  hours: '2:00PM - 3:15PM',
  title: 'Programming 1',
  code: 'COP2210',
  room: 'PG6 115',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Debra Davis', img: 'http://www.cis.fiu.edu/images/photos/debra-Davis.jpg', phone: 'N/A', email: 'dledavis@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
}, {
  days: 'Mon Wed',
  hours: '8:00AM - 9:15AM',
  title: 'Programming 1',
  code: 'COP2210',
  room: 'PG6 115',
  coordinates: {lat: 10124.12241, lon: 1221412.22},
  instructors: [{name: 'Masoud', img: 'http://www.cis.fiu.edu/images/photos/Masoud_milani.JPG', phone: '305-348-2925', email: 'milani@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
}];

const data = [
  { name: 'A+', uv: 1, amt: 100 },
  { name: 'A', uv: 17, amt: 100 },
  { name: 'A-', uv: 2, amt: 100 },
  { name: 'B+', uv: 2, amt: 100 },
  { name: 'B', uv: 8, amt: 100  },
  { name: 'B-',  uv: 2, amt: 100  },
  { name: 'C+',  uv: 2, amt: 100  },
  { name: 'C',  uv: 14, amt: 100  },
  { name: 'C-',  uv: 1, amt: 100  },
  { name: 'D+',  uv: 1, amt: 100  },
  { name: 'D',  uv: 26, amt: 100  },
  { name: 'D-',  uv: 1, amt: 100  },
  { name: 'F',  uv: 10, amt: 100  },
  { name: 'W',  uv: 16, amt: 100  }
];

// <img src="/assets/progress-placeholder.svg" alt="roadmap"/>

export class Search extends React.Component<any, any> {
    render() {
    return (
      <div className='full'>
          <h1>Search</h1>
          <div><Input placeholder="Search for Classes" style={{fontSize: '1.2em'}}>🔎</Input></div>
          <BarChart width={800} height={400} data={data} layout="vertical">
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <CartesianGrid vertical={true} />
          <Bar dataKey="uv" fill="#ff7300" />
          </BarChart>
          {
          p.map((d, i) => <Course key={i} data={d} rating={rating[i]}/>)
          }
      </div>
    )
  }
}
