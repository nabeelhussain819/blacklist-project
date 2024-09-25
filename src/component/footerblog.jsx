import '../component/footerblog.css'
import logo from '../img/logo white.png'
import BLIconButton from './BLiconbutton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SKInput from "../component/SKInput";
import { useNavigate } from 'react-router-dom';
import NearMeTwoToneIcon from '@mui/icons-material/NearMeTwoTone';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function FooterBlog() {
/* ============-------Email code Start----------============ */
  const form = useRef();
  const [emailValue, setEmailValue] = useState('');

  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateEmail(emailValue)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Reset the email error state
    setEmailError('');

    emailjs
      .sendForm('service_z28jrwv', 'template_4g7xvqq', form.current, {
        publicKey: 'lZGsGIY8aLTzqek-f',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailValue('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

/* ============-------Email code End----------============ */

  const navigate = useNavigate();

  let pageNavigate = (link) => {
    navigate(`/${link}`)
  }
  return (
    <>
      <section>
      <div className='bfooter'>
        <div className='bfdetail'>
        <p style={{marginBottom:'10px'}}>DON’T HOLD BACK</p>
        <h1>REACH OUT TO US</h1>
        <h5 style={{marginBottom:'-2px'}}>Let’s Chat <span><a href="https://wa.me/03243499800" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={{ fontSize: '15px', color: '#25D366', marginBottom: '-2.2px' }} /></a></span></h5>
        <form ref={form} onSubmit={sendEmail} id="bfinput">
        <SKInput
        placeholder="Enter Email"
        type="email"
        width="40vw"
        name='from_email'
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}
        className="footerinput"/>
        <BLIconButton 
        type='submit'
        label={<NearMeTwoToneIcon style={{ fontSize: '20px', color: 'grey' }} />}
        style={{ marginTop: '15px' }} />
        </form>
        <h7 id='bfnum' >+92 324 3499800</h7>
        <p style={{ color: 'red', margin: '0' , fontSize:'10px' }}>{emailError}</p>
        <div id='bflink'>
          <h5 onClick={() => pageNavigate('')}>Mainboared</h5>
          <h5 onClick={() => pageNavigate('apply')}>Get Scouted</h5>
          <h5 onClick={() => pageNavigate('blog')}>Blog</h5>
          <h5 onClick={() => pageNavigate('tbitalent')}>Talent</h5>
          <h5 onClick={() => pageNavigate('aboutus')}>Terms & Condition</h5>
          <h5 >Cookie Policy</h5>
        </div>
        </div>
        <div style={{margin:'0%' , padding:'0%' , textAlign:'right' , display:'flex',justifyContent:'right' , alignItems:'end'}}><img src={logo}  width={'200vw'} alt="" /></div>
      <hr/>
      </div>
      <div className='bfbottom'>
        <p>2024 All Rights Reserved</p>
        <div className='bficon'>
        <BLIconButton
        label={<FacebookIcon style={{ fontSize: '15px', color: '#4267B2' }} />}
        href="https://www.facebook.com/tbitalentpr?mibextid=LQQJ4d"
        />
        <BLIconButton 
         label={<InstagramIcon style={{ fontSize: '15px', color: '#d6249f' }} />}
         href="https://www.instagram.com/inctheblacklist?igsh=OHNmcHMxaXczcTM5"
         />
        <BLIconButton 
         label={<TwitterIcon style={{ fontSize: '15px', color: '#1DA1F2' }} />}
         href="https://twitter.com/"
         />
        <BLIconButton 
         label={<LinkedInIcon style={{ fontSize: '15px', color: '#0A66C2' }} />}
         href="https://www.linkedin.com/company/inctheblacklist/"
         />
        </div>
        <p style={{display:'flex' , justifyContent:'center' , alignItems:'center' , margin:'0%'}}><span style={{fontSize:'1rem'}}>&#169; </span>Copy Right Policy</p>
      </div>
    </section>
    </>
  )
}
