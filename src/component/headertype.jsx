import React, { useState, useEffect } from 'react';
import Loader from '../component/loader';
import '../component/headertype.css';
import himg1 from '../img/header1.png';
import himg2 from '../img/header2.png';
import himg3 from '../img/header3.png';
import himg4 from '../img/header4.png';
import himg5 from '../img/header4.png';
import '../screen/detailblog.css';
import logo from '../img/logo white.png';
// import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
// import BLIconButton from './BLiconbutton';
import TemporaryDrawer from './drawer';

const HeaderType = () => {
  useEffect(() => {
    [himg1, himg2, himg3, himg4, himg5].forEach((image) => {
      const img = new Image();
      img.src = image;
    });
    handleMouseEnter(himg5);
  }, []);

  const handleMouseEnter = (bg) => {
    document.body.style.background = `url(${bg}) no-repeat center / cover`;
    document.body.style.transition = 'background 0.5s ease-in-out';
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="headerimgcontrol">
       {/* NAVBAR START */}
       <div className="headerbody">
          <div className="header">
            <div className="headerleft">
              <ul>
                <li style={{listStyle:'inherit'}} className="headertop">Karachi</li>
              </ul>
            </div>
            <div className="headerright">
              <ul>
                <li style={{ textAlign: 'right', listStyle: 'none' }}>
                  <img src={logo} width={'48%'} alt="logo" />
                </li>
              </ul>
              <ul className="headerul">
                <li>
                  <a href="/aboutus">About</a>
                </li>
                <li>
                  <a href="/tbitalent">Talent</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/apply">Contact Us</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/inctheblacklist?igsh=OHNmcHMxaXczcTM5">Instagram</a>
                </li>
              </ul>
              {/* <div className="headerul">
                <BLIconButton label={<TroubleshootIcon style={{ fontSize: '2.5rem', color: 'white' }} />} />
              </div> */}
            </div>
          </div>
          <div className="headermid">
            <p>
              <li style={{ fontSize: '3.5vw' }}>Karachi</li>
            </p>
            <p>
              {/* <TemporaryDrawer /> */}
            </p>
          </div>
        </div>
        {/* NAVBAR END */}
            <ul className="headerTextcontrol">
              <ul>
                <li className="headerTextil" data-bg={himg4} onMouseEnter={() => handleMouseEnter(himg4)}>
                  <a data-aos="fade-left" data-aos-offset="50" data-aos-duration="1" className="headerTexta" style={{cursor:"pointer" , color:'white'}}>
                    MAINBOARD
                  </a>
                </li>
                <li className="headerTextil" data-bg={himg3} onMouseEnter={() => handleMouseEnter(himg3)}>
                  <a data-aos="fade-right" data-aos-offset="50" data-aos-duration="1" className="headerTexta" href="/tbitalent">
                    TALENT
                  </a>
                </li>
                <li className="headerTextil" data-bg={himg2} onMouseEnter={() => handleMouseEnter(himg2)}>
                  <a data-aos="fade-left" data-aos-offset="50" data-aos-duration="1" className="headerTexta" href="/apply">
                    GET SCOUTED
                  </a>
                </li>
                <li className="headerTextil" data-bg={himg1} onMouseEnter={() => handleMouseEnter(himg1)}>
                  <a data-aos="fade-right" data-aos-offset="50" data-aos-duration="1" className="headerTexta" href="/blog">
                    OUR BLOG
                  </a>
                </li>
              </ul>
            </ul>
            <ul className='phonesize'>
              <li><a href="" style={{color:'white'}}>MAINBOARD</a></li>
              <li><a href="/tbitalent">TALENT</a></li>
              <li><a href="/apply"> GET SCOUTED</a></li>
              <li><a href="/blog">OUR BLOG</a></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
export default HeaderType;
