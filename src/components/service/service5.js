import React from "react";
import serviceImage from '../../image/service5.jpg';
import './ser.css';

const service5 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">  OUR PROFESSIONAL TEAM</h2><br />
        <img src={serviceImage} alt="service5" className="images" /><br />
        Experience the ultimate service excellence with our professional team of experts.<br /><br />
        Service at AutoCare Lanka is a specialty. Delighting customers is our ultimate goal. Priceless peace of mind is what we provide for our customers. Our professionally qualified and competent staff is fully equipped to offer you the service your Toyota needs. It is with great pride that we maintain our service standards which have brought us to the high echelons of the automobile industry.
        <br /><br />All our technicians and service engineers are recruited from reputed training institutes in Sri Lanka.
        Comprehensive training workshops for all technicians and service engineers conducted by the human resources department according to the International Standards.
        <br /><br />Overseas training workshops are conducted in various companies in Japan, France, Germany and India which takes a systematic approach in promoting technicians based on competency levels.
        <br /><br />Technicians  Pro technician  Diagnosis Technicians  Diagnosis Master Technician.
      </p>
    </div>
  );
}
export default service5;