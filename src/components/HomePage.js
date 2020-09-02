import React, { useState, useEffect, useRef } from 'react';
import '../styles/HomePage.scss';
import SocialBar from './SocialBar';
const HomePage = () => {

  const textRef = useRef();

  const choices = [
    'writing code that brings joy ♥️.', 
    'solving interesting problems with cool 😎 people.',
    'bringing good vibes.',
    'casually studying mathematics 📈.',
    'bringing tech + social good 👨🏽‍💻 together.',
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
    <div className='home-page'>
      <div className='welcome'>
        Hi! I'm John <span role="img" aria-label="hand wave emoji">👋🏾</span>.<br/>
        <div className='welcome-body subline'>
          I like <span ref={textRef} id="welcome-text">{choices[0]}</span>
        </div>
        <div className='welcome-body description'>
          I'm a Master's student studying Computer Science at Northeastern University,
          concentrating in Artificial Intelligence and Human-Computer Interaction. 
          When I'm not doing homework, I work as a software engineer at <a href='www.buzzfeed.com' className='bzfd-link'>BuzzFeed</a>, 
          working on the Frontend Infrastructure team! When I'm not studying or working, 
          I'm probably diving into a lecture series, dreaming of halal food, or <s>forcibly dragging</s> <i>strategically convincing </i> my 
          friends to get bubble tea with me.
        </div>
      </div>
      <SocialBar/>
    </div>
  )
}
  

export default HomePage;