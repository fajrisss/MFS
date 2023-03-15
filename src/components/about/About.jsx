import React from 'react'
import './about.css'
import CV from './../../asset/img/M. Fajjris Shoba00.pdf'
import {BsDownload} from 'react-icons/bs'

const About = () => {
  return (
    <div className="container about_container" id='about'>
      <div className="about_me">
        <h5> I'am a</h5>
        <p>Fresh Graduate Electrical Engineering with specialization in front-end web developer. Have experience in developing and implementing responsive website designs, as well as having experience at Bangkit Academy through Kampus Merdeka Program as an intern student in the Cloud Computing learning path.</p>
      </div>
      <div className="about_more">
        <h5>More about me</h5>
        <p>there is more information about my skill & experience </p>
        <a href={CV} download className='cv_btn'>Download Resume <BsDownload/></a>
      </div>
      
    </div>
  )
}

export default About