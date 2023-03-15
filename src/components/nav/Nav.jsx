import React from 'react'
import './nav.css'
import {RiHome3Fill} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {ImBook} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><RiHome3Fill/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImBook/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillTelephoneFill/></a>
    </nav>
  )
}

export default Nav