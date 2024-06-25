import React from "react";
import serviceImage from '../../image/service7.jpg';
import './ser.css';

const service7 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">PERIODIC MAINTENANCE</h2><br />
        <img src={serviceImage} alt="service7" className="images" /><br />
        Giving your car a quick pick-me-up is easier than ever before!
        <br /><br />Getting ready for a long-distance drive or simply wish to obtain an analysis of the condition of your vehicle? We offer periodic maintenance services that diagnose and recover key areas of your automobile. With periodic maintenance services, improving the condition of your vehicle over a brief period of time shall help preserve its efficiency on the road, as well as its longevity. What's more, all our service sessions are backed by the assurance of 100% genuine spare parts from the companies.
        <br /><br />THE SERVICES WE OFFER FOR PERIODIC MAINTENANCE ARE:
        <ul>
          <li>Express maintenance</li>
          <li>Replacing engine oil and filter</li>
          <li>Vehicle inspection reports</li>
          <li>AC filter inspection</li>
          <li>Tyre pressure check and adjustment</li>
          <li>Battery check</li>
          <li>Brake inspection</li>
          <li>Road test</li>
          <li>Car detailing</li>
        </ul>
      </p>
    </div>
  );
}
export default service7;