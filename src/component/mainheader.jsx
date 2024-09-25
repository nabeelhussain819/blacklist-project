import React, { useState } from 'react'
import '../screen/detailblog.css'
import logo from '../img/logo white.png'
// import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
// import BLIconButton from './BLiconbutton';
import TemporaryDrawer from './drawer';
import { NavLink } from "react-router-dom";

export default function MainHeader() {
    // Talent Hover section
    const [isTalentHovered, setIsTalentHovered] = useState(false);
    const handleTalentClick = () => {
        setIsTalentHovered(!isTalentHovered);
    };
    // Model Hover section
    const [isModelHovered, setIsModelHovered] = useState(false);
    const handleModelClick = () => {
        setIsModelHovered(!isModelHovered);
    };

  return (
    <>
       <div className='headerbody'>
     <div className='header'>
     <div className='headerleft'>
      <ul><li style={{listStyle:'inherit'}} className='headertop'>Karachi</li></ul>
      <ul className='headerul'>
        <li><NavLink to="/">Mainboard</NavLink></li>
        <li
          onClick={handleTalentClick}
          className={isTalentHovered ? 'active-talent' : ''}
        >
          Talent
        </li>
        <li><NavLink to="/apply">Get Scouted</NavLink></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
      {isTalentHovered && (
        <ul className='/headerul'>
          <li style={{cursor:'pointer'}}
          onClick={handleModelClick}
          className={isModelHovered ? 'active-models' : ''}
          >Models</li>
          <li><NavLink to="/">DJ's</NavLink></li>
          <li><NavLink to="/">Footballers</NavLink></li>
          <li><NavLink to="/">Cricketers</NavLink></li>
          <li><NavLink to="/">Musicians</NavLink></li>
          <li><NavLink to="/">Photographers</NavLink></li>
        </ul>
      )}
      {isModelHovered && (
        <ul className='headerul'>
          <li><NavLink to="/profile">All</NavLink></li>
          {/* <li><a href="#">Male</a></li>
          <li><a href="#">Female</a></li>
          <li><a href="#">Kids</a></li> */}
        </ul>
      )}
    </div>
        <div className='headerright'>
            <ul>
                <li style={{textAlign:'right' , listStyle:'none'}}>
                <img src={logo} width={'48%'}  alt="logo" />
                </li>
            </ul>
        <ul className='headerul'>
            <li><NavLink to="/aboutus">About</NavLink></li>
            <li><NavLink to="/tbitalent">Talent</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/apply">Contact Us</NavLink></li>
            <li><a href='https://www.instagram.com/inctheblacklist?igsh=OHNmcHMxaXczcTM5' target='blank' alt='instagram'>Instagram</a></li>
        </ul>
        
        {/* This is search bar */}
        {/* <div className='headerul'>
        <BLIconButton 
         label={<TroubleshootIcon style={{ fontSize: '2.5rem', color: 'white' }} />}/>
        </div> */}

        </div>
    </div> 
        <div className='headermid'>
            <p><li style={{fontSize:'1rem'}}>Karachi</li></p>
            <p><TemporaryDrawer/></p>
        </div>
    </div>
    </>
  )
}
