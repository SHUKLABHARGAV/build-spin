import React, { useEffect, useState, Suspense, lazy } from "react";
import { RingLoader } from "react-spinners";

const Loder = () => {
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
        <Suspense fallback={<div>Loading...</div>}>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <RingLoader color="#0000ff" />
          </div>
        </Suspense>
      )}
      </>
  );
};

export default Loder;
