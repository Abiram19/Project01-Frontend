import React from "react";
import serviceImage from '../../image/service8.jpg';
import './ser.css';

const service8 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">ACCIDENT REPAIRS</h2><br />
        <img src={serviceImage} alt="service8" className="images" /><br />
        Recover your vehicle and get it back to its original condition!
        <br /><br />You never know when disaster strikes. But when it does, we can assure you peace of mind with speedy accident repairs to get your vehicle back on the road in no time. With specialist staff for engine and body maintenance along with the assurance of 100% genuine spare parts, AutoCare Lanka can help recover your vehicle after a collision in a fast, efficient and professional manner.
        <br /><br />Our accident services also comprise of breakdown and towing, that's available round-the-clock, island wide. If you are stranded due to an accident, we are only a phone call away to assist you!
      </p>
    </div>
  );
}
export default service8;