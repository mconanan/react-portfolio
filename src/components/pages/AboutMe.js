import React from 'react';
import css from '../../index.css';

export default function AboutMe() {
  return (
    <div className="about-me">
      <h1>Meet the Creator</h1> 
      <div className='selfieContainer'><img className="selfie border" src={require("../../assets/selfie2.JPG")} alt="author"/>
      </div>
      <p className='about-paragraph'>
        My name is Madeleine Conanan. I was born in Alabama in 1992, but have called the Bay Area my home 
        for many years. I graduated with my Bachelor's of Science in Nursing in 2016 and have worked as a Registered Nurse
        in various Intensive Care Units since then. This year, I have taken my love of critical thinking and problem solving away
        from the bedside and into the digital world. My attention to detail has married my love
        of design, and I am now able to use these carefully honed skills to bring web pages to life.
      </p>
    </div>
  );
}
