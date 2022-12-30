import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">
                Sidharth Mishra
            </h1>
            <ul className='footer_list'>
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="footer_link">Project</a>
                </li>
                <li>
                    <a href="#contact" className="footer_link">Contact</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer