import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

const Contact = () => { 
  return (
    <section id='contact'>
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>

        <div className="contact__options">
            <article className='contact__option'>
                <MdOutlineEmail className='contact__option__icon'/>
                <h4>Email</h4>
                <h5>carlosbenoliel@gmail.com</h5>
                <a href="mailto:carlosbenoliel15@gmail.com">Send a message</a>
            </article>
            <article className='contact__option'>
                <BsLinkedin className='contact__option__icon'/>
                <h4>Linkedin</h4>
                <h5>carlos Martins</h5>
                <a href="mailto:carlosbenoliel15@gmail.com">Send a message</a>
            </article>
            <article className='contact__option'>
                <MdOutlineEmail className='contact__option__icon'/>
                <h4>Email</h4>
                <h5>carlosbenoliel14@hotmail.com</h5>
                <a href="mailto:carlosbenoliel1">Send a message  </a>
            </article>
        </div>
    </section>
  )
}

export default Contact