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
    github:'https://github.com/PrinceM95/Geo-To-Go',
    bio: 'Geo-To-Go is an educational platform dedicated to enlightening individuals about countries, continents, states, capitals, and general knowledge associated with geography. With a primary focus on elementary to middle school learners, this website offers valuable resources for anyone seeking to enhance their understanding of capitals and flags. Whether you are a student, educator, or simply curious about geography, Geo-To-Go provides an accessible and enriching experience for all.'
  },
  {
    id: 2,
    image:  IMG2,
    title: 'Jacs Mystery Educator',
    github:'https://github.com/PrinceM95/Mystery-Educator',
    bio: 'Mystery Educator is a specialized platform created with the sole purpose of educating children between the ages of 6 and 13. Our goal is to provide engaging and informative content on a wide range of topics, from astronomy to exploring various musical instruments, utilizing the power of APIs. Designed to captivate young minds, Mystery Educator offers a unique learning experience that combines fun, curiosity, and knowledge acquisition. Join us on this educational journey and unlock the wonders of the world through interactive exploration.'
  },
  {
    id: 3,
    image:  IMG3,
    title: 'Island Hopping Adventures',
    github:'https://github.com/PrinceM95/first-team-project-team-island-hnpw',
    bio: 'A site that’s been created for individuals who seek to gain general knowledge on various islands around the globe. Users possess the option to search islands based off their respective continents and countries.'
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, bio}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
          <h3>{title}</h3>
          <p1>{bio}</p1>
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