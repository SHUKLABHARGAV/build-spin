import React, { useEffect, useState } from "react";
import Logo from "./img/logo 1.jpeg"

const WelcomeScreen = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the welcome screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    // Cleanup the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null; // Don't render the component if not visible
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000", // Set the background color to black
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff", // Set text color to white
        opacity: isVisible ? 1 : 0, // Fade effect
        transition: "opacity 1s ease-in-out",
      }}
    >
        <div onClick={onClose} style={{ cursor: "pointer" }}>
      <img
        src={Logo}// Replace with your welcome image path
        alt="Welcome"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
    </div>
  );
};

export default WelcomeScreen;
