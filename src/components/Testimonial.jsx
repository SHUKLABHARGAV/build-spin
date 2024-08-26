 import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from "./img/1.png"
import img2 from "./img/testimonial-2.jpg"
import img3 from "./img/testimonial-3.jpg"
import React, { useEffect, useState, Suspense, lazy } from "react";
import { RingLoader } from "react-spinners";
import Footer from "./Footer";

import Navbar from "./Navbar"
const Testimonial = () => {
  const [showLoader, setShowLoader] = useState(false);
  const Loder = lazy(() => import("react-spinners"));
  useEffect(() => {
    const img = new Image();
    const startTime = new Date().getTime();
    img.src = "https://via.placeholder.com/10x10.png"; // Use a small image

    img.onload = () => {
      const endTime = new Date().getTime();
      const duration = endTime - startTime;
      const speed = 15 / (duration / 1000); // Estimate speed

      if (speed < 1000) { // Set a threshold for "slow" speed
        setShowLoader(true);
        setTimeout(() => setShowLoader(false), 3000); // Hide loader after 3 seconds
      }
    };
  }, []);
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: true,
    navText: [
      '<i class="fa fa-chevron-left"  ></i>',
      '<i class="fa fa-chevron-right"></i>'
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
    {!showLoader && (
      <>
        <Navbar /> 
    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
            <p className="fw-medium text-uppercase text-primary mb-2">Reviews</p>
            <h1 className="display-5 mb-5">What Our Clients Say!</h1>
        </div>
    <OwlCarousel className="owl-carousel  d-block   testimonial-carousel" {...options}   >
      <div className="testimonial-item text-center" >
        <div className="testimonial-img position-relative " >
          <img className="img-fluid  rounded-circle mx-auto mb-5" style={{width:"20%",height:"10%"}}   alt="F" src={img1}  />
          <div className="btn-square bg-primary rounded-circle">
            <i className="fa fa-quote-left text-white"></i>
          </div>
        </div>
        <div className="testimonial-text text-center rounded p-4">
          <p style={{fontSize:'20px'}}>
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
            amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h5 className="mb-1">Client Name 1</h5>
          <span className="fst-italic">Profession</span>
        </div>
      </div>
      <div className="testimonial-item text-center" >
        <div className="testimonial-img position-relative " >
          <img className="img-fluid  rounded-circle mx-auto mb-5" style={{width:"20%",height:"10%"}}   alt="F" src={img1}  />
          <div className="btn-square bg-primary rounded-circle">
            <i className="fa fa-quote-left text-white"></i>
          </div>
        </div>
        <div className="testimonial-text text-center rounded p-4">
        <p style={{fontSize:'20px'}}>
            Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et
            amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.
          </p>
          <h5 className="mb-1">Client Name</h5>
          <span className="fst-italic">Profession</span>
        </div>
      </div>
      
       
    </OwlCarousel>
    </div>
    </div>
    <Footer />
    </>
    )}
    </>
  );
};

export default Testimonial;