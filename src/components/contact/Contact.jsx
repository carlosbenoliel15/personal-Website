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
                <div>
                    <MdOutlineEmail className='contact__option__icon'/>
                </div>
                <h4>Email</h4>
                <h5>carlosbenoliel@gmail.com</h5>
                <a href="mailto:carlosbenoliel15@gmail.com"  target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
                <div>
                <BsLinkedin className='contact__option__icon'/>
                </div>
             
                <h4>Linkedin</h4>
                <h5>carlos Martins</h5>
                <a href="https://linkedin.com/in/carlos-martins-777b75236" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
                <div>
                <MdOutlineEmail className='contact__option__icon'/>
                </div>
                
                <h4>Email</h4>
                <h5>carlosbenoliel14@hotmail.com</h5>
                <a href="mailto:carlosbenoliel14@hotmail.com" target="_blank">Send a message  </a>
            </article>
        </div>
    </section>
  )
}

export default Contact