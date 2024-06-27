import React from 'react';
import img1 from '../assets/Co3.jpg';
import img2 from '../assets/Co2.jpg';
import './Course.css';
import '../Career1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Course1() {
    return (
        <div className="container mt-5">
            {/* Course Image with Overlay */}
            <div className="position-relative  course-container mb-5">
                <img src={img1} className="img-fluid course-image" alt="Course" />
                <div className="course-overlay-text">
                    <h4 className="text-light">DIPLOMA IN PLANT ENGINEERING FOR SANITARY HEATING AND AIR CONDITIONING</h4>
                    <h4>(3.5 YEARS)</h4>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-md-9 mt-3">
                    <p>
                        AutoCare Lanka now offers a world-class vocational qualification in Modern building services.
                        Accredited by the Japanese Chamber of Industry and Commerce, the Diploma in Plant Engineering ensures that you will be the best of the best when it comes to state-of-the-art building management systems.
                        This is your chance to be a highly in-demand professional in a vastly expanding sector.
                        This program covers all aspects of a modern building from plumbing, electrical, fire protection, access control, air conditioning, heating, solar power, and integrated building management systems.
                        AutoCare Lanka is among the first to offer this qualification outside of Japan.
                        English Language is part of the program to support future employment chances in Germany itself.
                        Experience hands-on training with our extensive world-class brands.
                    </p>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                 <div class="container  ">
                        <div class="row justify-content-center">
                            <div class="text-center">
                                <div class="card p-3 shadow-sm course-fee-card">
                                    <h4>Course Fee</h4>
                                    <p class="lead">LKR 1,500,000</p>
                                    <p><small>*Conditions Apply</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-5 mb-5">
                    <img src={img2} className="img-fluid rounded custom-image-large" alt="Career" />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6">
                    <h3>Course Content:</h3>
                    <ul>
                        <li>Basic metal works</li>
                        <li>Checking and measuring systems and system components</li>
                        <li>Assembling of components</li>
                        <li>Manual cutting, machining and forming</li>
                        <li>Machine processing</li>
                        <li>Maintenance of equipment</li>
                        <li>Maintenance of technical facilities and systems</li>
                        <li>Installation of electrical assemblies and components in supply systems</li>
                        <li>Assembly and disassembly of pipes and ducts</li>
                        <li>Assembling, disassembling and transporting supply systems</li>
                        <li>Implementation of insulation, sealing and protective measures</li>
                        <li>Application of plant and systems technology as well as commissioning of waste disposal systems</li>
                        <li>Functional control and maintenance of supply and disposal systems</li>
                        <li>Differentiate and take into account sustainable systems and their possible users</li>
                        <li>Implementation of hygiene measures</li>
                        <li>Customer-oriented order processing</li>
                        <li>Taking into account physical, structural, ecological and economic framework conditions</li>
                        <li>Building Management Systems</li>
                        <li>Technical drawing</li>
                        <li>Technical calculations</li>
                        <li>Finance and accounting</li>
                        <li>Entrepreneurship</li>
                        <li>Human resource management</li>
                        <li>Labor law</li>
                    </ul>
                    <button className="btn btn-danger">Apply Now</button>
                </div>
            </div>

        </div>
    );
}