import React from "react";
import serviceImage from '../../image/service2.jpg';
import './ser.css';

const service2 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="titles">INSPECTIONS</h2><br />
        <img src={serviceImage} alt="service2" className="images" /><br />
        Is your vehicle genuine? Get it certified by the experts!<br /><br />
        If you have purchased your vehicle second-hand or suspect any parts of your vehicle to be less than genuine, our experts can help you determine its authenticity. With cutting-edge detection technologies and seasoned expertise, our staff shall perform a complete examination of your vehicle to ascertain its true origin.<br /><br />
        We conduct inspections for both registered and unregistered vehicles, providing detailed reports on the bona fide nature of the vehicle under your possession. All generated reports are designed to feature optimum security, in order to prevent tampering with any information.
      </p>
    </div>
  );
}
export default service2;