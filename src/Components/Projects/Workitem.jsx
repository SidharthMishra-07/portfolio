import React from 'react'

const WorkItem = ({item}) => {
  return (
    <div className="work_card" key={item.id}>
        <h2 className="work_title center">{item.heading}</h2>
        <img src={item.image} alt="Work1" className='work_img'/>
        <h3 className="work_desc">{item.desc}</h3>
        {/* <h3 className="work_title">{item.title}</h3> */}
        <a href={item.link} target="_blank" rel='noreferrer' className="work_button">
          <i className="bx bxl-github"></i> Check it out <i className='bx bx-right-arrow-alt work_button-icon'></i>
        </a>
    </div>
  )
}

export default WorkItem