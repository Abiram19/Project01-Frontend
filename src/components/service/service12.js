import React from "react";
import serviceImage from '../../image/service12.png';
import './ser.css';

const service12 = () => {
  return (
    <div className="container">
      <p className="service-description">
        <h2 className="title">LUBE SERVICES</h2><br />
        <img src={serviceImage} alt="service12" className="images" /><br />
        Car lubrication services at AutoCare Lanka include replacing the oils and fluids within the lubrication system of your car. Inspections and tests are also made to ensure that the automatic lubrication system is functioning correctly. Servicing and managing the lubricant system will keep the engine healthier for longer and decrease the chance of future repairs. The service will be performed by a highly skilled mechanic, helping with keeping the car and engine more efficient and safer. Our Lube job involves checking your vehicle to ensure all your moving parts are lubricated. Lube service includes, but is not limited to, oil changes.
        <br /><br />LUBE SERVICES INCLUDE:
        <ul>
          <li>Inspections of the oil tank</li>
          <li>Fluid change</li>
          <li>New oil filter</li>
          <li>Engine and system clean</li>
          <li>Other fluid replacements</li>
          <li>Removing old fluids and oil</li>
          <li>Tire pressure & condition check</li>
          <li>Check of cooling system, brakes, hoses, lights</li>
          <li>Check of CV joints, brake hoses, exhaust and suspension etc.</li>
        </ul>
      </p>
    </div>
  );
}
export default service12;