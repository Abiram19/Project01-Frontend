import React from "react";
import '../Course/Course.css'
import { Link } from 'react-router-dom';
import img5 from '../assets/c4.jpg';
import img1 from '../assets/A1.JPG';
import img2 from '../assets/Co5.jpg';
import img3 from '../assets/A2.JPG';
import img4 from '../assets/A5.JPG';



export default function Course() {



    return <div>

        <h1 className='text-center  my-5'>Automobile Engineering Courses</h1>
        <div className='container'>
            <div className='row'>


                <div className='col-md-6 mb-5'>
                    <div class="card" >
                        <div class="thumbanail">
                            <div class="img-container mt-5 ">
                                <img src={img1} className="img-fluid career-image  rounded custom-image" alt="Career" />
                                <div class="overlay">

                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title ">DIPLOMA IN PLANT ENGINEERING FOR SANITARY HEATING AND AIR CONDITIONING </h5>

                            <Link to="/course1" className="btn btn-danger">Read more</Link>

                        </div>
                    </div>
                </div>


                <div className='col-md-6 mb-5'>
                    <div class="card" >
                        <div class="thumbanail">
                            <div class="img-container mt-5 " >
                                <img src={img2} className="img-fluid career-image  rounded custom-image" alt="Career" />
                                <div class="overlay">

                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title ">GERMAN DIPLOMA IN AUTOMOBILE MECHATRONICS </h5>

                            <Link to="/course2" className="btn btn-danger">Read more</Link>
                        </div>
                    </div>
                </div>



                <div className='col-md-6 mb-5'>
                    <div class="card" >
                        <div class="thumbanail">
                            <div class="img-container mt-5 " >
                                <img src={img3} className="img-fluid career-image  rounded custom-image" alt="Career" />
                                <div class="overlay">

                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title ">GERMAN DIPLOMA IN AUTOMOBILE MECHATRONICS</h5>

                            <Link to="/course3" className="btn btn-danger">Read more</Link>
                        </div>
                    </div>
                </div>


                <div className='col-md-6 mb-5'>
                    <div class="card" >
                        <div class="thumbanail">
                            <div class="img-container mt-5 ">
                                <img src={img4} className="img-fluid career-image  rounded custom-image" alt="Career" />
                                <div class="overlay">

                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title ">CERTIFICATE IN AUTOMOBILE MECHATRONICS</h5>
                            <Link to="/course4" className="btn btn-danger">Read more</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}