import React from 'react'
import './about.css'
import PHOTO from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container"> 
        <div className="about__me">
          <div className="about__me-image">
            <img src={PHOTO} alt="About Image" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small> 1 Year </small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small> 1 Year </small>
              </article>
            </div>

            <p>
            A highly motivated and versatile professional with a strong foundation in web development. 
            I am eager to contribute my skills and drive to deliver innovative and efficient solutions. With a proven ability to quickly learn new technologies 
            and adapt to evolving project requirements, I am ready to thrive in a collaborative environment and make a meaningful impact and contribute to
            cutting-edge projects.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </section>
  )
}

export default About