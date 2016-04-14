import * as React from 'react'
var {LineChart, Line, Tooltip} = require('recharts');

var style = require('./style.css');

const data = [
      {name: 'Fall 2013 ', cumulativeGpa: 3.87, amt: 4.0},
      {name: 'Spring 2014', cumulativeGpa: 3.51, amt: 4.0},
      {name: 'Summer 2014', cumulativeGpa: 3.31, amt: 4.0},
      {name: 'Fall 2014',  cumulativeGpa: 2.45, amt: 4.0},
      {name: 'Spring 2015', cumulativeGpa: 3.25, amt: 4.0},
      {name: 'Summer 2015', cumulativeGpa: 3.1, amt: 4.0},
      {name: 'Fall 2015',  cumulativeGpa: 3.2, amt: 4.0},
];

class CustomTooltip extends React.Component<any, any> {
  getIntroOfPage(label) {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    } else if (label === 'Page B') {
      return "Page B is about women's dress";
    } else if (label === 'Page C') {
      return "Page C is about women's bag";
    } else if (label === 'Page D') {
      return "Page D is about household goods";
    } else if (label === 'Page E') {
      return "Page E is about food";
    } else if (label === 'Page F') {
      return "Page F is about baby food";
    }
  }

  render() {
    const { active } = this.props;

    if (active) {
      const { payload, label } = this.props;
      return (
        <div className="custom-tooltip">
          <p className="label">Spring 2015</p>
          <p className="intro">{`Cumulative Gpa : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  }
}


export class Progress extends React.Component<any, any> {
    render() {
    return (
      <div className={style.progress}>
        <LineChart width={window.innerWidth-80} height={240} data={data}>
          <Line type='monotone' dataKey='cumulativeGpa' stroke='rgba(255,255,255, 0.5)' strokeWidth={2} />
          <Tooltip content={<CustomTooltip/>}/>
        </LineChart>
        <div style={{width: '100%', display: 'flex'}}>
          <article>
          <h2>Your GPA seems to be stablising at 3.1</h2>
          <p>Here's a few suggestions to nudge it up a bit:</p>
          <ol>
            <li>Try working on your assignments at school</li>
            <li>Look for study groups for your class</li>
            <li>Grades reflect how a professor views you, so try standing out!</li>
          </ol>
          </article>
          <section>
            <h2>Transcript</h2>
            <ul>
              <li>
                <h3>Fall 2015</h3>
                <p>Term GPA: 3.87</p>
                <ul>
                  <li>COP 2210 | Programming Languages | B-</li>
                  <li>ENC 1101 | Logic for Computer Science | C</li>
                  <li>COT 4521 | Computational Geometry | A</li>
                  <li>PHY 2049 | Physics w/ Calc 2 | C</li>
                </ul>
              </li>
            </ul>
            <p style={{textAlign: 'center'}}><img style={{width: 32}} alt="arrow down" src="/assets/arrowdown.svg"/></p>
          </section>
        </div>
      </div>
    )
  }
}
