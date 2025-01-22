import React, { useEffect } from 'react'
import './About.css'
import profilepics from '../../assets/profilepics.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
  return (
    <div id='about' className='about'>
        <hr />
        <div className="about-wrapper">
            <div data-aos='fade-right' data-aos-duration='2000' ><img src={profilepics} alt="profile picture" /></div>
            
            <div data-aos='fade-left' data-aos-duration='2000' className="about-text">
                <input type="checkbox" id='about-text-input' />
                <h1>About Me</h1>
                <p>I am a dedicated UI/UX designer and front-end web developer, 
                    passionate about crafting visually appealing and user-centric 
                    digital experiences. With a deep understanding of both design 
                    principles and web development technologies, I bridge the gap 
                    between aesthetics and functionality. My approach to design 
                    prioritizes user experience, ensuring that every interaction 
                    feels seamless and intuitive.....</p> <br />
                    <div className="about-readmore-text">
                        <p>On the development side, I specialize in translating 
                            design mockups into responsive, efficient, and 
                            accessible web applications using HTML5, CSS3, 
                            JavaScript, and modern frameworks like React. 
                            I am driven by a love for clean, maintainable code and 
                            pixel-perfect design, always aiming to create products 
                            that are both beautiful and highly functional. <br />
                            Whether collaborating with a team or working 
                            independently, my goal is to deliver innovative and 
                            user-friendly solutions that meet business objectives 
                            and exceed user expectations.
                            <label className='about-label' htmlFor="about-text-input">Show Less</label>
                        </p>
                    </div>
                    <label className='about-label' htmlFor="about-text-input">Read More</label>

            </div>
        </div>
        <div className="about-footer">
            <div className="about-circle">
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About