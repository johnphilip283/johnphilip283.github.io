import React, { useEffect, useRef } from 'react';
import '../styles/HomePage.scss';
import SocialBar from './SocialBar';
import Avatar from './Avatar';

const HomePage = () => {

  const textRef = useRef();

  const choices = [
    'writing code that brings joy ♥️.', 
    'working on fun problems with cool people 😎.',
    'bringing good vibes.',
    'constantly learning more about the world 📈.',
    'building bridges between tech and social good 👨🏽‍💻.'
  ];

  useEffect(() => {
    let i = 0;
    const fadeText = () => {
      const { current } = textRef;
      if (current) {
        setTimeout(() => current.innerHTML = choices[++i % choices.length], 1000);
        current.style.opacity = 0;
        setTimeout(() => current.style.opacity = 1, 1000);
      }
    }
  
    const interval = setInterval(fadeText, 3000);
    return () => clearInterval(interval);

  }, [textRef, choices]);

  return (
    <main className='home-page'>
      <div className='welcome'>
        <h1>Hi! I'm John.</h1><br/>
        <div className='welcome-body subline'>
          I like <span ref={textRef} id="welcome-text">{choices[0]}</span>
        </div>
        <p className='welcome-body description'>
          I'm a Master's student studying Computer Science at Northeastern University,
          concentrating in Artificial Intelligence and Human-Computer Interaction. 
          When I'm not doing homework, I work as a software engineer at <a href='https://www.buzzfeed.com' className='bzfd-link'>BuzzFeed</a>, 
          doing frontend infrastructure for the Content Management Systems team. When I'm not studying or working, 
          I'm probably trying to learn something new, eating halal food, or spending too much time on TikTok.
        </p>
        <SocialBar/>
      </div>
      <Avatar/>
    </main>
  )
}
  

export default HomePage;