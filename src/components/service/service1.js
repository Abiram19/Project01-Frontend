import React from "react";
import serviceImage from '../../image/service1.jpg';
import './ser.css';

const service1 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">AUTOCARE LANKA TOTAL CARE & MAINTENANCE</h2><br/>
        <img src={serviceImage} alt="service1" className="images" />
        <br/>
        Our trained technicians will help customers to fulfill maintenance requirements to improve your vehicle's overall performance, while keeping a complete history of maintenance visits and repair detail history. AutoCare Lanka will also deliver timely reminders before your scheduled maintenance. Scheduled factory maintenance covers, inspect and adjust all fluid levels, replace engine oil and oil filter, rotate tires, multi-point vehicle inspection are something you can always rely professionally built new breed of AutoCare Lanka technicians.
      </p>
    </div>
  );
}

export default service1;