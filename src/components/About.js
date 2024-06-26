import React from 'react';
import img1 from './assets/img1.jpeg';
import img3 from './assets/img3.jpeg';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section className="About container mt-5">
      <div className="row mb-5">
        <div className="col-md-6">
          <h1>About AutoCare Lanka</h1>
          <p>
            AutoCare Lanka has an opportunity to transform the way vehicle owners interact with service centres, With a comprehensive online booking system, job opportunities, educational resources, and career pathways in the automotive industry.
            Come along and help shape the future of automotive education and service.
          </p>
        </div>
        <div className="col-md-6 ">
          <img src={img1} alt="About AutoCare Lanka" className="img-fluid " />
        </div>
      </div>
      <br></br>
      <div className="text-center mb-5">
        <h2>--OUR VISION--</h2><br></br>
        <p><center>
          Our vision is to revolutionize the vehicle service industry by becoming the preferred platform for seamless service reservations, 
          education opportunities, and career advancement within the automotive sector.
          </center>
        </p>
      </div><br></br>

      <div className="text-center mb-5">
        <h2>--OUR MISSION--</h2><br></br>
        <p><center>
          Simplify the process of booking service appointments for vehicle owners, ensuring convenience and reliability,
          provide high-quality automotive education and training programs to empower future professionals in the automotive industry, and 
          connect job seekers with rewarding career opportunities in the automotive sector through our integrated platform.
          </center>
        </p>
      </div>

      <div className="row">
        <div className="col-md-6"><br></br><br></br><br></br>
          <img src={img3} alt="Goals & Values" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>GOALS & VALUES</h1>
          <ul>
            <li>Simplify the process of booking vehicle service appointments through an intuitive and user-friendly online platform.</li>
            <li>Provide comprehensive automotive courses and training programs to equip students with the skills and knowledge needed for successful careers in the automotive industry.</li>
            <li>Prioritize customer satisfaction by delivering reliable services and personalized experiences.</li>
            <li>Commit to excellence in service delivery, education, and career placement, maintaining high standards at all times.</li>
            <li>Promote environmentally responsible practices within the automotive service sector, striving for sustainable solutions and operations.</li>
          </ul><br></br>
        </div>
      </div>

    </section>
  );
};

export default About;