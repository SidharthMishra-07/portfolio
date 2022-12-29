import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Mishra</a>
            <div className="nav_menu">
                <ul className='nav_list grid'>
                    <li className="nav_item">
                        <a href="#home" className='nav_link active-link'>
                            <i className="uil uil-estate nav_icon"></i>
                            &nbsp; Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" className='nav_link'>
                            <i className="uil uil-user nav_icon"></i>
                            &nbsp; About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" className='nav_link'>
                            <i className="uil uil-file nav_icon"></i>
                            &nbsp; Skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#project" className='nav_link'>
                            <i className="uil uil-scenery nav_icon"></i>
                            &nbsp; Projects
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className='nav_link'>
                            <i className="uil uil-message nav_icon"></i>
                            &nbsp; Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav_close" id="nav-close"></i>
            </div>

            <div className="nav_toggle">
                <i className="uil uil-apps" id="nav-toggle"></i>
            </div>
            
        </nav>

    </header>
  )
}

export default Header