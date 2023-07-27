import React from 'react'
import './NavBar.css'
import {AiOutlineUser}from 'react-icons/ai'
import {AiOutlineHome} from 'react-icons/ai'
import {BiMessageAltCheck} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'



const NavBar = () => {
  return (
    <nav>
      <a href="#header" ><AiOutlineHome/></a>
      <a href="#about" ><AiOutlineUser/></a>
      <a href="#skills" ><BiMessageAltCheck/></a>
      <a href="#about" ><RiServiceLine/></a>
      <a href="#about"><BiMessageAltDetail/></a>
    </nav>
  )
}

export default NavBar