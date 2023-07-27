import React from 'react'
import photo from '../../assets/foto intranet.jpg'

import './About.css'

const About = () => {
  return (
    <section id="about">
        <h5>Get to Kwow</h5>
        <h2>About  Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={photo} alt="" />
                </div>
            </div>
            <div className="about__content">
                <p>
                Allow me to introduce myself - I'm Carlos, a 22-year-old computer science student at the University of Lisbon, motivated and ambitious, about to finish my degree. The journey has been very stimulating, 
                and I'm excited to be on the verge of entering the professional world. Throughout my academic pursuits, I have immersed myself in the captivating field of computer science, 
                absorbing knowledge and refining my skills to become a proficient FullStack developer.
                </p>

                <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    
    </section>
  )
}

export default About