import React, { useState, useEffect } from 'react';
import Loader from '../component/loader';
import '../screen/modelactoinflu.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import Card from '../component/card';
import MainHeader from '../component/mainheader';
import FooterBlog from '../component/footerblog';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Testimonial from './Testimonial';
import { useNavigate } from 'react-router-dom';


export default function ModelActorinFluence() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timeout);
  }, []);

  const data = [
    {
      "firstname": "Bane tolith",
      "username": "@Btolith",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "John Smith",
      "username": "@Jsmith",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Jude Porto",
      "username": "@Jporto",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Da"
    },
    {
      "firstname": "Bob",
      "username": "@bob",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Emily",
      "username": "@emily",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "David",
      "username": "@david",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Sophie",
      "username": "@sophie",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Michael",
      "username": "@michael",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Olivia",
      "username": "@olivia",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Matthew",
      "username": "@matthew",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Grace",
      "username": "@grace",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Daniel",
      "username": "@daniel",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Ava",
      "username": "@ava",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Christopher",
      "username": "@christopher",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Emma",
      "username": "@emma",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "William",
      "username": "@william",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Mia",
      "username": "@mia",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Ethan",
      "username": "@ethan",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Lily",
      "username": "@lily",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "firstname": "Noah",
      "username": "@noah",
      "image": "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  const firstThreeData = data.slice(0, 9);

  return (
    <>
    {loading ? (
      <Loader />
    ) : (
      <>
      <MainHeader/>
      <section>
      <div className="actor">
        <h1 data-aos="fade-left"  data-aos-offset="200">ACTORS:</h1>
        <p data-aos="fade-right"  data-aos-offset="200">Elevate your productions with The Blacklist Inc. Talent. Our actors embody skill, versatility, and passion, bringing your vision to life with unparalleled excellence and charisma.</p>
        <h3 style={{cursor:'pointer'}} onClick={() => navigate(`/collection`)}>View More <ArrowRightAltIcon/></h3>
      </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ position: 'relative' }}  // Add this line to set the position for the pagination dots container
        >
          {firstThreeData.map((txt) => 
          <SwiperSlide>
            <Card name={txt.firstname} username={txt.username} image={txt.image}/>
          </SwiperSlide>
            )}
        </Swiper>
      </section>
      <section>
      <div className="actor">
        <h1 data-aos="fade-left"  data-aos-offset="200">MODELS:</h1>
        <p data-aos="fade-right"  data-aos-offset="200">At The Blacklist Inc. Talent, our models embody unparalleled grace and sophistication. Meticulously curated, they redefine elegance, making a statement that transcends conventional standards in the world of modeling.</p>
        <h3 style={{cursor:'pointer'}} onClick={() => navigate(`/collection`)}>View More <ArrowRightAltIcon/></h3>
      </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {firstThreeData.map((txt) => 
          <SwiperSlide>
            <Card name={txt.firstname} username={txt.username} image={txt.image}/>
          </SwiperSlide>
            )}
        </Swiper>
      </section>
      <section>
      <div className="actor">
        <h1 data-aos="fade-left"  data-aos-offset="200">INFLUENCERS:</h1>
        <p data-aos="fade-right"  data-aos-offset="200">Drawing inspiration from diverse industries, The Blacklist Inc. Talent is shaped by a fusion of creativity, technology, and human ingenuity, setting new benchmarks and redefining modeling excellence.</p>
        <h3 style={{cursor:'pointer'}} onClick={() => navigate(`/collection`)}>View More <ArrowRightAltIcon/></h3>
      </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {firstThreeData.map((txt) => 
          <SwiperSlide>
            <Card name={txt.firstname} username={txt.username} image={txt.image}/>
          </SwiperSlide>
            )}
        </Swiper>
      </section>
      <br/>
      <Testimonial/>
      <br/>
      <FooterBlog/>
      </>
    )}
  </>
  )
}
