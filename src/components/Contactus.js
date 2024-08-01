import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/A20.jpg';
import img2 from './assets/A21.jpg';
import img3 from './assets/A22.jpg';
import './Contactus.css';

const ContactForm = () => {
  const initialFormData = {
    firstName: '',
    phone: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);


    setFormData(initialFormData);


    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="container mt-4">

      <div className='slider-container'>
        <Slider {...settings}>
          <div>
            <img src={img1} alt="Image 1" />
          </div>
          <div>
            <img src={img2} alt="Image 2" />
          </div>
          <div>
            <img src={img3} alt="Image 3" />
          </div>
        </Slider>
      </div>
      <div className='mt-5'>
        {showSuccess && (
          <div className="alert alert-secondary" role="alert">
            Your message has been sent successfully!
          </div>
        )}
      </div>


      <div className="main-contact-section  ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="">
              <div className="card card-body border-0 shadow">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="card card-body card-contact bg-theme text-white">
                      <h1>Find Us</h1>
                      <div className="media mb-4 align-items-center">
                        <div className="icon-part mr-3">
                          <i className="fas fa-home mr-3"></i>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">66, Attidiya Road, Rathmalana, Sri Lanka 10390.</h5>
                        </div>
                      </div>
                      <div className="media mb-4 align-items-center">
                        <div className="icon-part mr-3">
                          <i className="fas fa-phone mr-3"></i>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0"> +94 123 456 789</h5>
                        </div>
                      </div>
                      <div className="media mb-4 align-items-center">
                        <div className="icon-part mr-3">
                          <i className="fas fa-envelope mr-3"></i>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">info@autocarelanka.com</h5>
                        </div>
                      </div>
                      <div className="media mb-4 align-items-center">
                        <div className="icon-part mr-3">
                          <i className="fas fa-print mr-3"></i>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0">+94 123 456 780</h5>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-7">
                    <h1>Contact Us</h1>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone No</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Your Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" className="btn btn-secondary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;