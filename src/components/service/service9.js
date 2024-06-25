import React from "react";
import serviceImage from '../../image/service9.jpg';
import './ser.css';

const service9 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">GENERAL WASH</h2><br />
        <img src={serviceImage} alt="service9" className="images" /><br />
        Give your car the shine it deserves with our specialized exterior body wash at AutoCare Lanka. Our advanced cleaning techniques and high-quality, eco-friendly products ensure that every inch of your vehicle's exterior is thoroughly cleaned and polished. From removing tough dirt and grime to restoring your car’s original luster, our expert team is dedicated to making your vehicle look its best. Trust us to provide a spotless, streak-free finish that will make your car stand out on the road. Visit us today for a superior exterior body wash experience!
      </p>
    </div>
  );
}
export default service9;