import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id='footer'>
      <ul className='permalinks' >
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">SkillSet</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="#"><BsInstagram/></a>
        <a href="#"><BsLinkedin/></a>
        <a href="#"><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Carlos Martins. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer