import React, { useEffect } from 'react'
import './Skill.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skill = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div id='skill' className='skill'>
        <hr />
        <h1 data-aos='fade-up' data-aos-duration='2000' >Skill / services</h1>
        <div className="skill-wrapper">
            <div data-aos='fade-left' data-aos-duration='2000' className="skill-column-one">
                <h3 className='title'>Coding Skill</h3>
                <div className="skill-box">
                    <div className="skill-content">
                    <div className="skill-progress">
                        <h3>HTML /CSS <span>90%</span></h3>
                        <div className="skill-bar"><span></span></div>
                    </div>
                    <div className="skill-progress">
                        <h3>JAVASCRIPT <span>70%</span></h3>
                        <div className="skill-bar"><span></span></div>
                    </div>
                    <div className="skill-progress">
                        <h3>REACT JS <span>70%</span></h3>
                        <div className="skill-bar"><span></span></div>
                    </div>
                    <div className="skill-progress">
                        <h3>FIGMA <span>90%</span></h3>
                        <div className="skill-bar"><span></span></div>
                    </div>
                    </div>
                </div>
            </div>
            <div data-aos='fade-right' data-aos-duration='2000' className="skill-column-two">
            <h3 className='title'>My Services</h3>
            <div className="my-services">
                <h3>Web Development</h3>
                <p>As a frontend web developer, I specialize in creating 
                    modern, responsive and user-friendly websites. My focus 
                    is on delivering high-quality code and seamless performance
                    across all devices.
                </p>
            </div>
            <div className="my-services">
                <h3>UI/UX Design</h3>
                <p>I specialize in crafting intuitive and visually compelling user interfaces
                    that deliver seamless experiences. My approach to UI/UX design focuses
                    on both aesthetics and functionality, ensuring that users can navigate 
                    through sites or apps effortlessly.
                </p>
            </div>
            <div className="my-services">
                <h3>Graphic Design</h3>
                <p>I provide creative and impactful graphic design solutions
                    tailored to brand's needs. My focus is on delivering designs 
                    that communicate message effectively while standing out visually.
                </p>
            </div>
            </div>
        </div>
        <div className="skill-footer">
            <div className="skill-circle">
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Skill