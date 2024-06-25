import React from "react";
import serviceImage from '../../image/service3.webp';
import './ser.css';

const service3 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">BODY AND PAINT CENTRE</h2><br />
        <img src={serviceImage} alt="service3" className="images" /><br />
        Providing care and maintenance to your vehicle, all of which are of superior industrial standards.<br /><br />
        The AutoCare Lanka Body and Paint Centre caters to all your vehicle's requirements under one roof. Facilitating advanced equipment that has been authorized for use and exclusively imported from Japan such as the Car-O-Liner (a computerized measuring system to denote alignments on the body and frame), welding machines and UV heaters ensure world-class vehicle maintenance for every vehicle. We house separate specialist staff for engine and body repairs, thereby providing expert attention to every nook and corner of each vehicle.<br /><br />
        Adhering to strict standards from your vehicle company, every vehicle that is serviced by our Body and Paint Centre is also entitled to the warranty of 100% genuine spare parts from your vehicle brands. Repairs and paint works be them light, moderate or heavy are performed on schedule, ranging anywhere between 2 hours minimum and 2 weeks maximum.
      </p>
    </div>
  );
}
export default service3;