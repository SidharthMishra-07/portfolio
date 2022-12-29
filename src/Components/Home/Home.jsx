import React from 'react';
import './Home.css';
import Social from './Social';
import Data from './Data';
import Scroll from './Scroll';
import Particle from './Particle';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social />
                <div className="home_img"></div>
                <Data />
            </div>

            <Scroll />
        </div>
        
        <Particle />
    </section>
  )
}

export default Home