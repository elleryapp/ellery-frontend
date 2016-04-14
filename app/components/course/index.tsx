import * as React from 'react';
import Icon from '../icon';

var style = require('./style.css');

class Course extends React.Component<any, any> {
  static defaultProps = {
      data: {
        days: 'Tue Thu',
        hours: '5:00PM - 6:15PM',
        title: 'Software Engineering',
        code: 'COP5431',
        room: 'PG6 115',
        coordinates: {lat: 10124.12241, lon: 1221412.22},
        instructors: [{name: 'Masoud Milani', img: 'http://www.cis.fiu.edu/images/photos/Masoud_milani.JPG', phone: '305-348-2925', email: 'milani@cis.fiu.edu', url: 'http://users.cis.fiu.edu/~milani/'}]
    }
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.course} style={this.props.style}>
        <section style={{backgroundColor: 'rgb(64, 233, 90)'}}>
          <h3>{this.props.data.days}</h3>
          <p>{this.props.data.hours}</p>
        </section>
        <section style={{backgroundImage: 'url(assets/map-placeholder.png)', backgroundSize: 'cover'}}>
          <h3 style={{backgroundColor: 'rgba(45, 111, 168, 0.5)', width: '100%', height: '100%', textAlign: 'center', lineHeight: '128px'}}>{this.props.data.room}</h3>
        </section>
        <article>
          <h2>{this.props.data.title}</h2>
          <h3>{this.props.data.code}</h3>
          {this.props.data.instructors.map((p, i) => {
            return (
              <div key={i} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <a href={p.url}><img style={{display: 'inline-block', width: 32, height: 32, backgroundImage: `url(${p.img})`, backgroundSize: 'cover', borderRadius: '100%', border: '1px solid #fff'}}/> {p.name} {this.props.rating}</a>
                <a href={'tel:'+p.phone}><Icon type='phone'/> {p.phone}</a>
                <a href={'mailto:'+p.email}><Icon type='email'/> {p.email}</a>
              </div>
            )})}
        </article>
      </div>
    );
  }
}
export default Course;
