import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/carlos-martins-777b75236" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/carlosbenoliel15" target="_blank"><BsGithub/></a>
      
    </div>
  )
}

export default HeaderSocials