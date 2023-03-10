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

                <div className="footer_social">
                    <a href="https://github.com/SidharthMishra-07" className="footer_social-link" target="_blank" rel='noreferrer'>
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/sidharth-mishra-30b590211/" className="footer_social-link" target="_blank" rel='noreferrer'>
                        <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://www.instagram.com/its_captain_sid/" className="footer_social-link" target="_blank" rel='noreferrer'>
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://twitter.com/Sid_Mishra07" className="footer_social-link" target="_blank" rel='noreferrer'>
                        <i className="bx bxl-twitter"></i>
                    </a>
                    <a href="https://medium.com/codechef-vit/what-is-ajax-ddb403e3478e" className="footer_social-link" target="_blank" rel='noreferrer'>
                        <i className="bx bxl-medium"></i>
                    </a>
                </div>

                <span className="footer_copy">&#169; Sidharth Mishra. All rights reserved</span>
                <span className='center'>Made with ?????? by Sidharth</span>
            </div>
        </footer>
    )
}

export default Footer