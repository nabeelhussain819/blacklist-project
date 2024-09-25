import React, { useState, useEffect } from 'react';
import Loader from '../component/loader';
import '../screen/aboutus.css'
import MainHeader from '../component/mainheader'
import FooterBlog from '../component/footerblog'

export default function Aboutus() {
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
        <MainHeader />
        <div className="about">
        <h1 data-aos="fade-down" data-aos-offset="120">About Us</h1>
        <h3 data-aos="fade-right" data-aos-offset="120">Empowering Models, Elevating Standards
        TBI Talents is a premier model management agency dedicated to empowering models and
        setting new industry standards.</h3>
        <p data-aos="fade-left" data-aos-offset="120"> Founded on the principles of integrity, professionalism, and
        inclusivity, we are committed to nurturing talent and fostering meaningful relationships within
        the modeling community. Since our inception, TBI Talents has emerged as a trusted partner for models seeking
        comprehensive representation and unparalleled support. Our team of seasoned professionals
        brings a wealth of industry experience and expertise, ensuring that our models receive the
        guidance and resources needed to thrive in the competitive world of modeling.</p>
        <p data-aos="fade-right" data-aos-offset="120">At TBI Talents, we celebrate diversity and embrace individuality. We believe that every model has
        a unique story to tell and are dedicated to amplifying their voices on the global stage. Our
        inclusive approach ensures that models of all backgrounds feel welcome and valued within our
        agency. From portfolio development to career management, we offer a range of services tailored to
        meet the unique needs of each model. Our collaborative approach fosters a supportive
        environment where models can grow, learn, and excel in their careers.</p>
        <p data-aos="fade-left" data-aos-offset="120">Join us at TBI Talents and experience the difference in model representation.</p>
        <hr/>
        <h1 data-aos="fade-down" data-aos-offset="120">Vision & mission</h1>
        <h3 data-aos="fade-right" data-aos-offset="120">At TBI Talents, our vision is to redefine the modeling industry by fostering an inclusive and
        empowering environment where models of all backgrounds can thrive, inspiring confidence, and
        embracing diversity.</h3>
        <p data-aos="fade-left" data-aos-offset="120">Our mission at TBI Talents is to provide unparalleled representation and support to our models,
        empowering them to pursue their dreams with confidence and integrity. We are committed to
        nurturing talent, fostering creativity, and celebrating individuality within the modeling
        community.</p>
        <hr/><h1 data-aos="fade-down" data-aos-offset="120">Terms & Conditions</h1>
        <h3 data-aos="fade-right" data-aos-offset="120">Model Consent Agreement
        Welcome to TBI Talents. By engaging our services, you agree to adhere to the following terms
        and conditions.</h3>
        <p data-aos="fade-left" data-aos-offset="120">By engaging with TBI Talents, you acknowledge your understanding and acceptance of these
        terms and conditions.</p>
    </div> 
        <FooterBlog />
      </>
    )}
  </>
);
}