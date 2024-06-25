import React from "react";
import serviceImage from '../../image/service4.jpg';
import './ser.css';

const service4 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">GENERAL SERVICE</h2><br />
        <img src={serviceImage} alt="service4" className="images" /><br />
        At AutoCare Lanka, our ultimate objective is to provide nothing less than the best quality service for our customers. This is fulfilled through our greatest assets, our skilled human resources base. All our staff members are provided with continuous training programs both locally and overseas to upgrade their knowledge and skills; as well as to keep pace with the latest technical advancements. To ensure that your precious vehicle is returned to you in sublime condition, our
        expert team of technicians only use specially designed precision tools for servicing, fault diagnosis and maintenance.<br /><br />
        With a team of highly trained professionals on par with International professional standards and latest technology; your precious vehicle is in safest hands of the automobile industry in Sri Lanka. At AutoCare Lanka, we deliver the following services which bring a priceless peace of mind to you.
      </p>
    </div>
  );
}
export default service4;