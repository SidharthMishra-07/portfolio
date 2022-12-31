import React from 'react';
import './Projects.css';
import Works from './Works';

const Project = () => {
  return (
    <div className="projects section" id="projects">
        <h2 className="section_title">Projects</h2>
        <span className="section_subtitle">My Works</span>
        <div className="projects_container container grid">
            <Works />
        </div>
    </div>
  )
}

export default Project