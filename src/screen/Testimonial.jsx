import React, { useState } from "react";
import testimonial_img1 from "../img/12.png";
import testimonial_img2 from "../img/2.png";
import testimonial_img3 from "../img/9.png";
import testimonial_img4 from "../img/11.png";
import qouteUp from "../img/quoteup.png";
import qouteDown from "../img/quotedown.png";
import '../screen/apply_testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

export default function Testimonial() {

  return (
    <div className="testimonial_main main_div height-100">
      <div className="container">
        <div className="testimonial_heading">
          <h1 data-aos="fade-left"  data-aos-offset="200">TESTIMONIALS</h1>
          <p data-aos="fade-right"  data-aos-offset="200">
          Client testimonials speak volumes about The Blacklist Inc. Talent. Exceptional service, unparalleled expertise – a game-changer in the modeling industry. Satisfied clients, our greatest endorsement.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="testimonial_swiper"
          style={{ position: 'relative' }}  // Add this line to set the position for the pagination dots container
        >
          <SwiperSlide>          
             <div className="crousel_main">
          <div className="row crousel_bgEffect p-100">
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="line">
                <div className="reviewHeading">
                  <h3 style={{fontFamily:"headerfont" , fontWeight:"100" , textAlign:'center'}}>Client Reviews</h3>
                </div>
              </div>
              <div className="img-main">
                <img src={testimonial_img4} alt="image" />
                <div className="img_content">
                  <p className="person-name">Aly Ahmed</p>
                  <p className="person">Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12 w-58">
              <div className="reviews_main reviewHeadingBottom">
                <h3>Client reviews</h3>
                <div className="qoute qouteLeft">
                  <img src={qouteDown} alt="" />
                </div>
                <p>
                Working with TBI Talents has been an absolute pleasure. Their team is
                professional, responsive, and truly cares about the success of their models. I've
                had nothing but positive experiences with them and would highly recommend
                their services to anyone looking to break into the modeling industry.
                </p>
                <div className="qoute qouteRight">
                  <img src={qouteUp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>          
             <div className="crousel_main">
          <div className="row crousel_bgEffect p-100">
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="line">
                <div className="reviewHeading">
                  <h3>Client Reviews</h3>
                </div>
              </div>
              <div className="img-main">
                <img src={testimonial_img2} alt="" />
                <div className="img_content">
                  <p className="person-name">Abeer</p>
                  <p className="person">Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12 w-58">
              <div className="reviews_main reviewHeadingBottom">
                <h3>Client reviews</h3>
                <div className="qoute qouteLeft">
                  <img src={qouteDown} alt="" />
                </div>
                <p>
                I've been represented by TBI Talents for several years now, and I couldn't be
                happier with the support and opportunities they've provided me. Their dedication
                to diversity and inclusivity sets them apart, and I'm proud to be part of such a
                forward-thinking agency. Join our community of satisfied models.
                </p>
                <div className="qoute qouteRight">
                  <img src={qouteUp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>          
             <div className="crousel_main">
          <div className="row crousel_bgEffect p-100">
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="line">
                <div className="reviewHeading">
                  <h3>Client Reviews</h3>
                </div>
              </div>
              <div className="img-main">
                <img src={testimonial_img3} alt="" />
                <div className="img_content">
                  <p className="person-name">Ali Khan</p>
                  <p className="person">Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12 w-58">
              <div className="reviews_main reviewHeadingBottom">
                <h3>Client reviews</h3>
                <div className="qoute qouteLeft">
                  <img src={qouteDown} alt="" />
                </div>
                <p>
                As a client of TBI Talents, I've been consistently impressed by their
                professionalism and commitment to excellence. They go above and beyond to
                ensure that their models are well-prepared and represented, and it shows in the
                quality of their work. I look forward to continuing our partnership in the future. You have a satisfied models.
                </p>
                <div className="qoute qouteRight">
                  <img src={qouteUp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>          
             <div className="crousel_main">
          <div className="row crousel_bgEffect p-100">
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="line">
                <div className="reviewHeading">
                  <h3>Client Reviews</h3>
                </div>
              </div>
              <div className="img-main">
                <img src={testimonial_img1} alt="" />
                <div className="img_content">
                  <p className="person-name">Anas </p>
                  <p className="person">Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10 col-sm-12 w-58">
              <div className="reviews_main reviewHeadingBottom">
                <h3>Client reviews</h3>
                <div className="qoute qouteLeft">
                  <img src={qouteDown} alt="" />
                </div>
                <p>
                TBI Talents is the gold standard when it comes to model management. From
                securing high-profile gigs to providing valuable career guidance, they've been
                instrumental in helping me achieve my goals as a model. I can't recommend
                them highly enough. Join our community of satisfied models and experience.
                </p>
                <div className="qoute qouteRight">
                  <img src={qouteUp} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
          </SwiperSlide>
        </Swiper>
       
      </div>
    </div>
  );
}
