import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/Meu projeto.png'
import HeaderSocials from './HeaderSocials'
import { useState,useEffect,useCallback  } from 'react'



const Header = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  

  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = ["Junior Web Developer", " Junior FullStack Developer", " Senior CS Stundent"];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
    setText(updatedText);
  
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
  
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, text, loopNum]);
  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick])

 
  return (
    <header>
      <div id ="header" className="container header__container">
          <h5>Welcome to  my Portfolio</h5>
          <h1>My  name is Carlos Martins</h1>
          <h5>{`and I'm a `}<span className="txt-rotate"><span className="wrap">{text}</span></span></h5>
          <CTA/>
          <HeaderSocials/>
          <a href="#footer" className='scrool__down'> Scrool Down</a>
          <div className="me">
            <img src={Me} alt="foto de perfil" />
          </div>
      </div>
    </header>
  )
}

export default Header