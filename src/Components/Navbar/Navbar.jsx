import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.svg'
import menuline from '../../assets/menu-line.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuclose from '../../assets/close.svg'
import menuopen from '../../assets/menuone.svg'

const Navbar = () => {
    const [navbarset, setNavbarset] = useState(false);
    const [menu, setmenu]= useState("home");
    const menuRef = useRef();
    const openMenu = ()=>{
      menuRef.current.style.right='0';
    }
    const closeMenu = ()=>{
      menuRef.current.style.right='-350px';
    }

    const changeBackground = ()=>{
      if(window.scrollY >= 80){
          setNavbarset(true);
      } else{
          setNavbarset(false);
      }
  };
  window.addEventListener('scroll', changeBackground);
    
  return (
    <div className= {navbarset ? "navbar active" : "navbar"}>
        <img className='logo' src={logo} alt="logo" />
        <ul ref={menuRef} className='navbar-list'>
            <img src={menuclose} onClick={closeMenu}  alt="menu close icon" className='menu-close' />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setmenu('home')}>Home</p></AnchorLink>{menu === "home" && <img src ={menuline} alt='menu line'/>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu('about')}>About Me</p></AnchorLink>{menu === "about" && <img src ={menuline} alt='menu line'/>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p onClick={()=>setmenu('skill')}>Skill/Services</p></AnchorLink>{menu === "skill" && <img src ={menuline} alt='menu line'/>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setmenu('project')}>Project</p></AnchorLink>{menu === "project" && <img src ={menuline} alt='menu line'/>}</li>
            <li id='contact-me-nav'><a href="mailto:iykesdesign111@gmail.com">Contact Me</a></li>
        </ul>
        <div className='navbar-contact'><a href="mailto:iykesdesign111@gmail.com">Contact Me</a></div>
          <img src={menuopen} onClick={openMenu}  alt="menu bar" className='menu-open' />
    
        
        
    </div>
  )
}

export default Navbar