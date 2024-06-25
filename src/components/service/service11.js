import React from "react";
import serviceImage from '../../image/service11.avif';
import './ser.css';

const service11 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">NANO TREATMENT</h2><br />
        <img src={serviceImage} alt="service1" className="images" /><br />
        Protect and enhance your vehicle with our cutting-edge Nano Treatment service at AutoCare Lanka. This advanced treatment uses nano-technology to create an ultra-thin, invisible layer that shields your car's exterior from environmental contaminants, UV rays, and minor scratches. The result is a stunning, long-lasting shine and superior protection that keeps your vehicle looking brand new. Our skilled technicians meticulously apply nano coating, ensuring maximum coverage and durability. Invest in the future of your car's appearance and resilience with our premium Nano Treatment service. Visit us to learn more!
      </p>
    </div>
  );
}
export default service11;