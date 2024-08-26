import React, { useEffect, useState } from "react";
// import img1 from "./img/product 6.jpeg"
// import img2 from "./img/product 3.jpeg"
// import img3 from "./img/product 7.jpeg"
// import servicesData from "service.json"
import DynamicImage from './Dynamicproducts';
const Service = () => {
    const primary = {
        color : "#0b6ab2",
    
    };
    const btnprimary = {
        backgroundColor : "#0b6ab2",
        color:'white'
    
    };
    
    const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/service.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);
    return (
    
    <>
        <div className='App' >
        <div className="row gy-5 gx-4">
                    {services.map((service) => (
                <DynamicImage
                 
                    imgSrc={service.img}
                    title={service.title}
                    description={service.description}
                    id={service.id}
                    btnStyle={service.btnStyle}
                />
            ))}
            </div>
    
 
 

    </div>
    {/* <div className="container-xxl py-5">
    <div className="container">
      <div
        className="text-center mx-auto pb-4 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "600px" }}
      >
        <p className="fw-medium text-uppercase mb-2" style={primary}>
          Our Services
        </p>
        <h1 className="display-5 mb-4">
          We Provide Best Industrial Services
        </h1>
      </div>
      <div className="row gy-5 gx-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="col-md-6 col-lg-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="service-item">
              <img
                className="img-fluid"
                src={service.img}
                alt={service.title}
              />
              <div className="service-detail"  style={{
                  backgroundImage: `url(${service.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "300px", // Adjust the height as needed
                  color: "white" // Ensure text color is readable
                }} > 
                <div className="service-title" >
                  <hr className="w-25" />
                  <h3 className="mb-0" >{service.title}</h3>
                  <hr className="w-25" />
                </div>
                <div className="service-text">
                  <p className="text-white mb-0">{service.description}</p>
                </div>
              </div>
              <a className="btn btn-light" style={btnprimary} href="n">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div> */}
     
    </>
  )
}

export default Service
