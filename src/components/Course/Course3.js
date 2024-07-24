import React, { useState } from 'react';
import img1 from '../assets/A2.JPG';
import img2 from '../assets/A9.jpg';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Course3() {
    const [showModal, setShowModal] = useState(false);

    const handleApplyClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

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
                        <button className="btn btn-danger" onClick={handleApplyClick}>Apply Now</button>
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
                    <div className="col-md-3 d-flex">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="text-center">
                                    <div className="card p-3 shadow-sm course-fee-card">
                                        <h4>Course Fee</h4>
                                        <p className="lead">LKR 150,000</p>
                                        <p><small>*Conditions Apply</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show d-block custom-modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Apply Now</h5>
                                <button type="button" className="close" onClick={handleClose} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="text" className="form-control" id="phone" placeholder="Enter your phone number" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
