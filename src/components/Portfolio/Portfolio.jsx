import React from 'react';
import imagem from '../../assets/website-screen.PNG';
import './portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Portfolio Item 1',
    description: 'This is the description for portfolio item 1',
    githubLink: 'https://github.com/example1',
    liveDemoLink: 'https://example1.com',
  },
  {
    id: 2,
    title: 'Portfolio Item 2',
    description: 'This is the description for portfolio item 2',
    githubLink: 'https://github.com/example2',
    liveDemoLink: 'https://example2.com',
  },
  // Add more portfolio items here...
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 id='title'>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioItems.map((item) => (
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={imagem} alt="portfolio item" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.githubLink} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={item.liveDemoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a> 
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;
