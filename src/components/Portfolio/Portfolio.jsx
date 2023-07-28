import React from 'react';
import imagem from '../../assets/website-screen.PNG';
import minesweeper from '../../assets/mineSweeper.png'
import './portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Real State Website',
    image:imagem,
    description:'HTML . CSS . Bootstrap',
    githubLink: 'https://github.com/carlosbenoliel15/real-state--projeto1',
    liveDemoLink: 'https://carlosbenoliel15.github.io/real-state--projeto1/',
  },
  {
    id: 2,
    image:minesweeper,
    title: 'MineSweeper Game (Desktop)',
    description: 'JavaScrip . HTML . CSS ',
    liveDemoLink: 'https://mine-sweeper-ten.vercel.app/index.html',
    githubLink: 'https://github.com/carlosbenoliel15/MineSweeper',
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
              <img src={item.image} alt="portfolio item" />
            </div>
            <h3>{item.title}</h3>
            <h4>{item.description}</h4>
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
