import React, { useEffect } from 'react'
import './Home.css'
import giticon from '../../assets/GitIcon.svg'
import behanceicon from '../../assets/BehanceIcon.svg'
import xicon from '../../assets/Xicon.svg'
import linkdinicon from '../../assets/linkimprovice.svg'
import youtubeicon from '../../assets/Youtubeicon.svg'
import avatartwo from '../../assets/avatar2.svg'
import verify from '../../assets/verifyVector.svg'
import downloadicon from '../../assets/downloadicon.svg'
import resume from '../../assets/Resume.pdf'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div id='home' className='home'>
        <hr />
        <div className="home-container">
            <div data-aos='fade-up' data-aos-duration='2000' className="home-avatar-container">
                <div className="home-avatar-content">
                    <img src={avatartwo} alt="" />
                    <h2>Iykes Designs<br/><span>UI/UX Frontend</span> <span>Web Developer</span></h2>
                    <a href="mailto:iykesdesign111@gmail.com">Hire Me</a>
                </div>
            </div>
            <h1 data-aos='fade-up' data-aos-duration='2000' >Hi! I am AZI IKECHUKWU <span><img src={verify} alt="" /></span></h1>
            <p data-aos='fade-up' data-aos-duration='2000' >(Iykes Designs)</p>
            <h2 data-aos='fade-down' data-aos-duration='2000' className='header-two' >I am a <span className='span'>UI/UX Designer and a Frontend Web Developer</span></h2>
            <div data-aos='fade-down' data-aos-duration='2000' className="home-icons">
                <a href="https://github.com/iykesworld"><img src={giticon} alt="github icon" /></a>
                <a href="https://www.behance.net/kennethiyke"><img src={behanceicon} alt="behance icon" /></a>
                <a href="https://x.com/iykesworld1"><img src={xicon} alt="x icon" /></a>
                <a href="www.linkedin.com/in/iykes-design-233375348"><img src={linkdinicon} alt="linkdin icon" /></a>
                <a href="https://www.youtube.com/@Factcheck617"><img src={youtubeicon} alt="youtube icon" /></a>
            </div>
            <a target='_blank' href={resume}><div data-aos='fade-down' data-aos-duration='2000' className="home-resume">
                <img src={downloadicon} alt="" />
                <h4>Download Resume</h4></div></a>
        </div>
        <div className="home-footer">
            <div className="home-circle">
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Home