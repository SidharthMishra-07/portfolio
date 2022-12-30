import React, {useState} from 'react';
import './Header.css';

const Header = () => {
    const [Toggle, setToggle] = useState(false);
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>Sidharth Mishra</a>
            <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
                <ul className='nav_list grid'>
                    <li className="nav_item">
                        <a href="#home" className='nav_link active-link'>
                            <i className="uil uil-estate nav_icon"></i>
                            Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" className='nav_link'>
                            <i className="uil uil-user nav_icon"></i>
                            About
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#skills" className='nav_link'>
                            <i className="uil uil-file nav_icon"></i>
                            Skills
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#project" className='nav_link'>
                            <i className="uil uil-scenery nav_icon"></i>
                            Projects
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" className='nav_link'>
                            <i className="uil uil-message nav_icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i className="uil uil-times nav_close" onClick={() => setToggle(!Toggle)}></i>
            </div>

            <div className="nav_toggle" onClick={() => setToggle(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
            
        </nav>

    </header>
  )
}

export default Header