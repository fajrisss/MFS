import React from 'react'
import './header.css'
import ME from './../../asset/img/me.jpg'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="container header_container" id='header'>
      <div className="header_text">
        <h5>Hello i'am</h5>
        <h1>M. FAJJRIS SHOBA</h1>
        <div className="running">
          <h5 data-text='Frontend.Developer'>Frontend.Developer</h5>
        </div>
      </div>
      <div className="header_img">
        <img src={ME} alt="me" />
        <div className="header_icon">
          <a href="https://linkedin.com/in/fajjris" target='_blank' rel="noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/fajrisss" target='_blank' rel="noreferrer"><BsGithub/></a>
          <a href="https://www.instagram.com/fajjrisshoba/" target='_blank' rel="noreferrer"><FaInstagramSquare/></a>
        </div>
      </div>
      
    </div>
  )
}

export default Header