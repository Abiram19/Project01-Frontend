import React from "react";
import serviceImage from '../../image/service6.jpg';
import './ser.css';

const service6 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">GENERAL REPAIRS</h2><br />
        <img src={serviceImage} alt="service6" className="images" /><br />
        Making your vehicle as good as new - every single time.
        <br /><br /> Preserving the performance of all our vehicles is of prime importance to us. That is why we provide comprehensive services to maintain the life of your automobile, irrespective of the amount of wear and tear. Using state-of-the-art equipment and the latest technology that has been authorized by various motor corporations from Japan, France, Germany and India, every vehicle undergoes thorough diagnosis to spot and rectify faults to retain its original condition.
        <br /><br />Our staff forms the core of all our maintenance services, conducting every operation with precision and timing. Extensively trained and qualified both locally and internationally in facilities, our technicians know what's best for your vehicle every time you consult us.
        <br /><br />The general services we offer under one roof are:
        <ul>
          <li>Running repairs</li>
          <li>Engine tune-ups</li>
          <li>Unit repairs (engine, transmission units, starter motors, alternators etc.)</li>
          <li>Suspension repairs</li>
          <li>Tyre replacement and wheel alignment services</li>
          <li>High-tech electronic and electronic diagnostic services</li>
          <li>Key programming services</li>
          <li>A/C maintenance and repairs</li>
          <li>Calibration of ECU (Electronic Control Unit)</li>
          <li>4 into 4 accessories installation</li>
          <li>All hybrid services (repair/maintenance/technical advisory services)</li>
        </ul>
      </p>
    </div>
  );
}
export default service6;