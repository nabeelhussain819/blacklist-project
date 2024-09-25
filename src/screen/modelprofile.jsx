import React, { useState, useEffect , useRef } from 'react';
import Loader from '../component/loader';
// Import Swiper React start
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// swiper import end
import '../screen/modelprofile.css'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'
import img6 from '../img/6.png'
import img7 from '../img/7.png'
import img8 from '../img/8.png'
import img9 from '../img/9.png'
import img10 from '../img/10.png'
import img11 from '../img/11.png'
import img12 from '../img/12.png'

export default function ModelProfile() {

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
    <Swiper
        slidesPerView={2}
        direction={(window.innerWidth <= 950) ? 'vertical' : 'horizontal'}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="model_profile_swiper"
      >
        <SwiperSlide style={{display:'flex',justifyContent:'end'}}> <div className='leftpro' style={{width:'50%',textAlign:'end',marginTop:'20vw',fontSize:'2.5vw'}}>
          <h3 className='profilename1'>TBI TALENT</h3>
          <h3 className='profilename1'>MODELS
          {/* <span className='heitmodel'>6'0"(180cm)</span> */}
          </h3>
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img1} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img2} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img3} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img4} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img5} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img6} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img7} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img8} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img9} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img10} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img11} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
        <SwiperSlide> <div className='rightpro'>
          <img src={img12} width={'100%'} height={'100%'} alt="image" />
        </div></SwiperSlide>
      </Swiper>
      </>
    )}
  </>
  )
}