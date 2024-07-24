import React, { useState } from 'react';
import img1 from '../assets/A5.JPG';
import img2 from '../assets/A8.jpg';
import './Course.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Course4() {
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
                    <div className="col-md-3 mt-3">
                        <button className="btn btn-danger" onClick={handleApplyClick}>Apply Now</button>
                    </div>
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
                    <div className="col-md-3 d-flex">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="text-center">
                                    <div className="card p-3 shadow-sm course-fee-card">
                                        <h4>Course Fee</h4>
                                        <p className="lead">Completely Free-of-charge</p>
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
