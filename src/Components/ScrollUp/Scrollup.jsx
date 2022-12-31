import React from 'react';
import './Scrollup.css'

const Scrollup = () => {
    window.addEventListener('scroll', function () {
        const scrollup = document.querySelector('.scrollup');
        if (this.scrollY >= 560) {
            scrollup.classList.add('show_scroll');
        } else {
            scrollup.classList.remove('show_scroll');
        }
    });
  return (
    <a href="#home" className="scrollup">
        <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default Scrollup