import '../screen/detailblog.css'
import img1 from '../img/blog1.jpg'
import img2 from '../img/blog2.jpg'
import img3 from '../img/blog3.jpg'
import img4 from '../img/blog4.jpg'
import BLButton from '../component/BLbutton';
import FooterBlog from '../component/footerblog';
import MainHeader from '../component/mainheader'
import React, { useState, useEffect } from 'react';
import Loader from '../component/loader';
import Blog from './blog'

export default function DetailBlog() {

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
      <MainHeader/>
      <Blog/>
      <div className='headerContent'>
        <div  className='headerContentdetail1'>
          <img data-aos="fade-right" src={img1} alt="" />
          <div style={{width:'55%' , marginLeft:'2.2vw' }}>
                <h3 id='hchleft' data-aos="fade-left">The Evolution of Diversity in Modeling</h3>
                <p id='hcdleft' data-aos="fade-left">In recent years, the modeling industry has seen a significant shift towards embracing
                diversity and inclusivity. Gone are the days when the industry was dominated by a
                narrow definition of beauty. Today, models of all shapes, sizes, ages, genders, and
                ethnicities are gracing the runways and appearing in ad campaigns, challenging
                traditional beauty standards.</p>
                <div style={{textAlign:'left'}}>
                <BLButton style={{color:'white' , border:'1px solid white' , borderRadius:'0' , fontSize: '1.1vw'}} label='Read More'/>
                </div>
              </div>
        </div>
        
        <div className='headerContentdetail2'>
              <div style={{width:'55%' , marginRight:'2.2vw'}}>
                <h3 id='hchright' data-aos="fade-right">Navigating the Digital Age: Social Media for Models</h3>
                <p id='hcdright' data-aos="fade-right">In today's digital age, social media has become an essential tool for models looking to
                build their personal brand and connect with fans and industry professionals. Platforms
                like Instagram, TikTok, and YouTube offer models a unique opportunity to showcase
                their personality, style, and creativity, reaching a global audience with just the tap of a
                screen.</p>
                <div style={{textAlign:'right'}}>
                <BLButton style={{color:'white' , border:'1px solid white' , borderRadius:'0' , fontSize: '1.1vw'}} label='Read More'/>
                </div>
                </div>
          <img data-aos="fade-left" src={img2} alt="" />
        </div>
        <div className='headerContentdetail1'>
          <img data-aos="fade-right" src={img3} alt="" />
          <div style={{width:'55%' , marginLeft:'2.2vw'}}>
                <h3 id='hchleft' data-aos="fade-left">The Importance of Self-Care for Models</h3>
                <p id='hcdleft' data-aos="fade-left">While the glitz and glamour of the modeling industry may seem enticing, behind the
                scenes, models often face intense pressure to maintain a certain image and meet
                demanding expectations. From long hours on set to rigorous fitness regimens, the life
                of a model can take a toll on both physical and mental well-being.</p>
                <div style={{textAlign:'left'}}>
                <BLButton style={{color:'white' , border:'1px solid white' , borderRadius:'0' , fontSize: '1.1vw'}} label='Read More'/>
                </div>
                </div>
        </div>
        <div className='headerContentdetail2'>
              <div style={{width:'55%' , marginRight:'2.2vw'}}>
                <h3 id='hchright' data-aos="fade-right">The Future of Fashion: Sustainability in Modeling</h3>
                <p id='hcdright' data-aos="fade-right">As concerns about climate change and environmental sustainability continue to grow,
                the fashion industry is facing increasing pressure to adopt more sustainable practices.
                From fast fashion to the use of fur and exotic skins, the fashion industry has long been
                criticized for its environmental impact and contribution to waste and pollution.</p>
                <div style={{textAlign:'right'}}>
                <BLButton style={{color:'white' , border:'1px solid white' , borderRadius:'0' , fontSize: '1.1vw'}} label='Read More'/>
                </div>
              </div>
          <img data-aos="fade-left" src={img4} alt="" />
        </div>
      </div>
      <section><FooterBlog/></section>
      </>
    )}
  </>
  )
}
