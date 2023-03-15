import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_po0pb8c', 'template_qgpwrq9', form.current, 'jkNgBe-iVRY01z5Xe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container contact_container" id='contact'>
      <div className="contact_header">
        <h5>Get In Touch</h5>
        <h1>Contact Me!</h1>
      </div>
      <div className="contact_email-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact">
            <div className="contact_name">
              <input type="text" name="from_name"  placeholder='Your Name ...'/>
              <input type="email" name="user_email"  placeholder='Your E-mail ...'/>
            </div>
            <div className="contact_message">
              <textarea name="message" placeholder='Type Here...'/>
            </div>
          </div>
          <input type="submit" value="Send Message"  className='submit_email' />
        </form>
      </div>

      <div className="contact_social">
        <p>or you can visit my social media!</p>
        <div className="social_icon">
          <a href="https://linkedin.com/in/fajjris" target='_blank' rel="noreferrer"><BsLinkedin/></a>
          <a href="https://github.com/fajrisss" target='_blank' rel="noreferrer"><BsGithub/></a>
          <a href="https://www.instagram.com/fajjrisshoba/" target='_blank' rel="noreferrer"><FaInstagramSquare/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact