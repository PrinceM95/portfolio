import React from 'react'
import './portfolio.css'
import ImageSlider from "./ImageSlider";

const GTG = [
  {url:'https://i.postimg.cc/1t215zR3/gt1.png', title: 'gtg' },
  {url:'https://i.postimg.cc/Y2LwDQ8G/gtg2.png', title: 'gtg2' },
  {url:'https://i.postimg.cc/Nfhv3LPN/gtg3.png', title: 'gtg3' },
  {url:'https://i.postimg.cc/hjJNwq8W/gtg4.png', title: 'gtg4' },
  {url:'https://i.postimg.cc/vTnF1dDL/gtg5.png', title: 'gtg5' },
  {url:'https://i.postimg.cc/pLRbd4vz/gtg6.png', title: 'gtg6' },
  {url:'https://i.postimg.cc/HsQ1dHqT/gtg7.png', title: 'gtg7' },
  {url:'https://i.postimg.cc/0yngKn53/gtg8.png', title: 'gtg8' },
  {url:'https://i.postimg.cc/d0Vb2CL0/gtg9.png', title: 'gtg9' }
];
const JME = [
  {url:'https://i.postimg.cc/PrLzw5Xk/jme.png', title: 'jme' },
  {url:'https://i.postimg.cc/GmGFXgT7/jme2.png', title: 'jme2' },
  {url: 'https://i.postimg.cc/yNKFthFV/jme3.png', title: 'jme3' },
  {url: 'https://i.postimg.cc/CLWCHp5n/jme4.png', title: 'jme4' }

];
const IHA = [
  {url: 'https://i.postimg.cc/RC1qbrgn/Screenshot-64.png', title: 'iha' },
  {url:'https://i.postimg.cc/X7VqR2P1/Screenshot-65.png', title: 'iha2' },
];

const containerStyles = {
  width: '280px',
  height: '200px',
  margin: '0 auto'
}


const data = [
  {
    id: 1,
    title: 'Geo-To-Go',
    image: GTG,
    github:'https://github.com/PrinceM95/Geo-To-Go',
    bio: 'Geo-To-Go is an educational platform dedicated to enlightening individuals about countries, continents, states, capitals, and general knowledge associated with geography. With a primary focus on elementary to middle school learners, this website offers valuable resources for anyone seeking to enhance their understanding of capitals and flags. Whether you are a student, educator, or simply curious about geography, Geo-To-Go provides an accessible and enriching experience for all.'
  },
  {
    id: 2,
    image:  JME,
    title: "Jac's Mystery Educator",
    github:'https://github.com/PrinceM95/Mystery-Educator',
    bio: 'Mystery Educator is a specialized platform created with the sole purpose of educating children between the ages of 6 and 13. Our goal is to provide engaging and informative content on a wide range of topics, from astronomy to exploring various musical instruments, utilizing the power of APIs. Designed to captivate young minds, Mystery Educator offers a unique learning experience that combines fun, curiosity, and knowledge acquisition. Join us on this educational journey and unlock the wonders of the world through interactive exploration.'
  },
  {
    id: 3,
    image:  IHA,
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
        data.map(({id, title, image, github, bio}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
            <div style={containerStyles}>
            {/* <h4>{title}</h4> */}
            <ImageSlider slides={image} />
              </div>
            </div>
        {/* <h3>{title}</h3> */}
        <p1>{bio}</p1>
        <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github Link</a>
        </div>
      </article>
          )
        })
      }
      </div>
  </section>
  );
};

export default portfolio