import React from 'react';
import img1 from '../assets/A2.JPG';
import img2 from '../assets/A9.jpg';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Course3() {

  return (
    <div>
      <div className="container mt-5">
        {/* Course Image with Overlay */}
        <div className="position-relative text-center course-container mb-5">
          <img src={img1} className="img-fluid course-image" alt="Course" />
          <div className="course-overlay-text">
            <h4 className="text-light">HYBRID AND EV TECHNOLOGY</h4>
            <h3>(3 MONTHS PART TIME)</h3>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-md-9 mt-3">
            <p>Hybrid and electric vehicles are the future of the automotive industry. Join this three-month part-time course and learn the ins and outs of hybrid vehicles and handling high voltage systems safely.
            </p>

          </div>
          <div className="col-md-3 mt-3">
            <button className="btn btn-danger">Apply Now</button>
          </div>

        </div>
        <div className="row mb-4">
          <div className="col-md-4 mb-5">
            <img src={img2} className="img-fluid rounded custom-image-large" alt="Career" />
          </div>

          <div className="col-md-5">
            <h3>Course Content:</h3>
            <ul>
              <li>Introduction to Hybrid & EV Technology</li>
              <li>High voltage awareness training</li>
              <li>Explanation Hybrid Drive Layouts</li>
              <li>High voltage components</li>
              <li>Driving situations in Hybrid & EV operation</li>
              <li>Power flow circuit (high voltage) and Interlock Circuits</li>
              <li>Traction Battery</li>
              <li>Identifying of the components</li>
              <li>Deactivating/activating of the high voltage system</li>
              <li>Introduction to Plug in Hybrid</li>
              <li>Charging of Electric vehicles (German & Japanese)</li>
              <li>CDI, Power Electronic and Battery Management System Cooperation for the System Operation</li>
              <li>Fault diagnosing in High Voltage and Hybrid system</li>
            </ul>

          </div>
          <div className="col-md-3 d-flex ">
            <div class="container ">
              <div class="row justify-content-center">
                <div class=" text-center">
                  <div class="card p-3 shadow-sm course-fee-card">
                    <h4>Course Fee</h4>
                    <p class="lead">LKR 150,000</p>
                    <p><small>*Conditions Apply</small></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}