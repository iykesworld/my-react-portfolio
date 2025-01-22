import React, { useEffect } from 'react'
import './Project.css'
import Project_data from '../../assets/project_data'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Project = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div data-aos='fade-right' data-aos-duration='2000' id='project' className='project'>
        <hr />
        <h1>Projects</h1>
        <div className="project-container">
            {Project_data.map((project, index)=>{
                return <div key={index} className='project-box'>
                    <img src={project.p_img} alt="project image" />
                    <div className="project-content">
                        <h4>{project.p_name}</h4>
                        <p className='project-desc'>{project.p_desc}</p>
                        <div className="project-btn-container">
                            <a target='_blank' href={project.p_uibtn}>View UI Design</a>
                            <a target='_blank' href={project.p_webbtn}>View Web App</a>
                        </div>
                    </div>
                </div>
            })}
        </div>
        <div className="project-footer">
            <div className="project-circle">
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Project