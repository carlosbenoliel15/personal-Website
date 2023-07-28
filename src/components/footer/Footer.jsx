import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <ul className='permalinks' >
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">SkillSet</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/_carlos.martins_15/" target="_blank"><BsInstagram/></a>
        <a href="https://linkedin.com/in/carlos-martins-777b75236" target="_blank"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Carlos Martins. All rights reserved.</small>
      </div>
    </section>
  )
}

export default Footer