import React from "react";
import serviceImage from '../../image/service10.jpg';
import './ser.css';

const service10 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">GENERAL WASH WITH INTERIOR DETAILING</h2><br />
        <img src={serviceImage} alt="service10" className="images" /><br />
        Elevate your driving experience with our comprehensive General Wash with Interior Detailing service at AutoCare Lanka. Our meticulous process starts with a thorough exterior wash to remove dirt and grime, followed by intensive interior detailing. We clean every nook and cranny, from vacuuming and shampooing carpets to conditioning leather and polishing surfaces. Using top-tier, eco-friendly products, our skilled technicians ensure your car looks impeccable inside and out. Treat your vehicle to a complete refreshment and enjoy the feeling of a pristine, well-maintained ride. Visit us today to experience the ultimate in car care!
      </p>
    </div>
  );
}
export default service10;