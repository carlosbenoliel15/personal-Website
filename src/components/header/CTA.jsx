import React from 'react'
import CV from './cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'> Check my CV</a>
        <a href="#contact" className='btn btn-primary'>Contact me</a>

    </div>
  )
}

export default CTA;