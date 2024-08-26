import React, { useEffect, useState, Suspense, lazy } from "react";
import { RingLoader } from "react-spinners";
import Carousel  from "./components/Carousel";
import About  from "./components/About";
import Counter from "./components/Counter";
import Service from "./components/Service";
import OurTeam from "./components/OurTeam";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import Loder from "./components/Loder";
import Navbar from "./components/Navbar"
// import Loder from "./components/img/1.png";

const Home = () => {
  
  const [showLoader, setShowLoader] = useState(false);
  const Loder = lazy(() => import("react-spinners"));
  useEffect(() => {
    const img = new Image();
    const startTime = new Date().getTime();
    img.src = "https://via.placeholder.com/10x10.png"; // Use a small image

    img.onload = () => {
      const endTime = new Date().getTime();
      const duration = endTime - startTime;
      const speed = 10 / (duration / 1000); // Estimate speed

      if (speed < 100) { // Set a threshold for "slow" speed
        setShowLoader(true);
        setTimeout(() => setShowLoader(false), 3000); // Hide loader after 3 seconds
      }
    };
  }, []);

  return (
    <>
     {showLoader && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          zIndex: 10000,  // Ensure the loader is above everything
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <RingLoader color="#0000ff" />
        </div>
      )}
     {/* <Loder/> */}
     {!showLoader && (
        <>
          <Navbar /> {/* This should now be hidden while the loader is visible */}
          <Carousel />
          <About />
          <Counter />
          <Service />
          <OurTeam />
          <Testimonial />
          <Footer />
        </>
      )}
        
      
    </>
  )
}

export default Home
