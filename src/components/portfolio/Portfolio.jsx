import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gtg2.png'
import IMG2 from '../../assets/jme.png'
import IMG3 from '../../assets/ih.png'

const data = [
  {
    id: 1,
    image:  IMG1,
    title: 'Geo-To-Go',
    github:'https://github.com/PrinceM95/Geo-To-Go/tree/main/geotogo-client',
  },
  {
    id: 2,
    image:  IMG2,
    title: 'Jacs Mystery Educator',
    github:'https://github.com/2022-October-Java-PT/system-react-mystery-educator-repo',
  },
  {
    id: 3,
    image:  IMG3,
    title: 'Island Hopping Adventures',
    github:'https://github.com/2022-October-Java-PT/system-react-mystery-educator-repo',
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio