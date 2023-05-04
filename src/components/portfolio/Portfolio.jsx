import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gtg.png'
import IMG2 from '../../assets/jme.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Geo-To-Go</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Jac's Mystery Educator</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
{/* 
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article> */}

      </div>
    </section>
  )
}

export default portfolio