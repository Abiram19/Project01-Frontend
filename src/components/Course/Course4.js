import React from 'react';
import img1 from '../assets/A5.JPG';
import img2 from '../assets/A8.jpg';
import './Course.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Course4() {

  return (
    <div>
      <div className="container mt-5">
            {/* Course Image with Overlay */}
            <div className="position-relative text-center course-container mb-5">
                <img src={img1} className="img-fluid course-image" alt="Course" />
                <div className="course-overlay-text">
                    <h4 className="text-light">CERTIFICATE IN AUTOMOBILE MECHATRONICS</h4>
                    <h3>(2 YEARS FOC)</h3>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-9 mt-3">
                    <p>
                    Since its inception, AutoCare Lanka has offered a quality vocational qualification in the form of its certificate in Automobile Mechatronics. The course is offered completely free of charge to qualified students in our Academy.

Students are selected through a demanding selection process which include written aptitude test, assessment centre and final interview.

Successful graduates stand a chance to have a career at AutoCare Lanka itself, one of the largest engineering conglomerates in Sri Lanka.

                    </p>
                </div>
                <div className="col-md-3 mt-3"> <button className="btn btn-danger">Apply Now</button></div>


            </div>
            <div className="row mb-4">
                <div className="col-md-4 mb-5">
                    <img src={img2} className="img-fluid rounded custom-image-large" alt="Career" />
                </div>
                <div className="col-md-1 mb-5"></div>
                <div className="col-md-4">
                    <h3>Course Content:</h3>
                    <ul>
        <li>Workplace safety</li>
        <li>Workplace communication</li>
        <li>Tools and equipment</li>
        <li>Motor vehicle and systems</li>
        <li>Engine technology</li>
        <li>Drive train system</li>
        <li>Brake technology</li>
        <li>Suspension system</li>
        <li>Steering system</li>
        <li>Wheels and alignment</li>
        <li>Wheels and tires</li>
        <li>Energy supply and starting systems</li>
        <li>Comfort and safety systems</li>
        <li>High voltage systems</li>
        <li>Electrical and electronics</li>
    </ul>



                </div>

                <div className="col-md-3 d-flex ">
                <div class="container ">
                        <div class="row justify-content-center">
                            <div class="text-center">
                                <div class="card p-3 shadow-sm course-fee-card">
                                    <h4>Course Fee</h4>
                                    <p class="lead">Completely Free-of-charge</p>
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