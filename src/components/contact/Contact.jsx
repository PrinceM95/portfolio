import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jm9ppqc', 'template_fm540rt', form.current, 'QXFnDXDVsAxY12mep')
    
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container"> 
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>E-mail</h4>
            <h5>moutimap@gmail.com</h5>
            <a href="mailto:moutimap@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Prince Moutima</h5>
            <a href="https://www.linkedin.com/in/princemoutima/" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="e-mail" name='e-mail' placeholder='Your E-mail' required />
          <textarea name="message" rows="7" placeholders='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact