import * as React from 'react'
import {Icon} from '../icon'

var style = require('./style.css');

class About extends React.Component<any, any> {
  render() {
  return (
    <div className={style.about}>
      <section>
        <img src="assets/brand/alaingalvan.jpg" alt="Alain Galvan Photo"/>
        <article>
          <h1>Hi there!</h1>
          <p>My name is Alain, I work @ <a href="http://openhid.com">FIU</a> as a Graphics Research Assistant, working on making tools to make artists, musicians, and devs lives easier.</p>
          <div>
            <a href="http://twitter.com/alaingalv"><Icon type="twitter"/></a>
            <a href="http://linkedin.com/in/alaingalvan"><Icon type="linkedin"/></a>
            <a href="http:///alaingalvan.deviantart.com"><Icon type="deviantart"/></a>
            <a href="http://github.com/alaingalvan"><Icon type="github"/></a>
            <a href="http://codepen.io/alaingalvan"><Icon type="codepen"/></a>
            <a href="http://soundcloud.com/alaingalvan"><Icon type="soundcloud"/></a>
          </div>
          <div style={{padding: '8px 0'}}>
          <a href="assets/brand/alain-galvan-resume.pdf" style={{backgroundColor: '#3093b0'}} className="btn">Resume</a>
          <a style={{backgroundColor: '#3676d1'}} className="btn" href="mailto:hi@alain.xyz">Email</a>
          </div>
        </article>
      </section>
    </div>
  )
  }
}

export default About;
