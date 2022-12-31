import React from 'react';
import {projectsData} from './Data';
import Workitem from './Workitem';

const Works = () => {
  return (
    <div className="works_container container grid">
        {projectsData.map((item) => {
            return <Workitem item={item} key={item.id}/>;
        })}
        
    </div>
  )
}

export default Works