import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Prince M.</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Prince Moutima Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default footer