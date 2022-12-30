import React from 'react';
import './About.css';
import AboutImg from '../../assets/Profile.jpeg';
import CV from '../../assets/CV.pdf';
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt="About" className="about_img" />  
            <div className="about_data">
                <Info />
            </div>  
        </div>
    </section>
  )
}

export default About