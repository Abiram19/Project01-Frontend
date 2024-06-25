// Services.js
import React from 'react';
import './Services.css';
import service1Img from '../image/service1.jpg';
import service2Img from '../image/service2.jpg';
import service3Img from '../image/service3.webp';
import service4Img from '../image/service4.jpg';
import service5Img from '../image/service5.jpg';
import service6Img from '../image/service6.jpg';
import service7Img from '../image/service7.jpg';
import service8Img from '../image/service8.jpg';
import service9Img from '../image/service9.jpg';
import service10Img from '../image/service10.jpg';
import service11Img from '../image/service11.avif';
import service12Img from '../image/service12.png';
import service13Img from '../image/service13.jpg';
import service14Img from '../image/service14.jpg';

const Services = () => {
  return (
    <div className="container">
      <h1 className="heading">Our Services</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="/service1">
                <img src={service1Img} alt="service1" className="image" /><br/><br/>
                <p className="ser">AUTOCARE LANKA TOTAL CARE & MAINTENANCE</p> 
              </a>
            </td>
            <td>
              <a href="/service2">
                <img src={service2Img} alt="service2" className="image" /><br/><br/>
                <p className="ser">INSPECTIONS</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/service3">
                <img src={service3Img} alt="service3" className="image" /><br/><br/>
                <p className="ser">BODY AND PAINT CENTRE</p>
              </a>
            </td>
            <td>
              <a href="/service4">
                <img src={service4Img} alt="service4" className="image" /><br/><br/>
                <p className="ser">GENERAL SERVICE</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/service5">
                <img src={service5Img} alt="service5" className="image" /><br/><br/>
                <p className="ser">OUR PROFESSIONAL TEAM</p>
              </a>
            </td>
            <td>
              <a href="/service6">
                <img src={service6Img} alt="service6" className="image" /><br/><br/>
                <p className="ser">GENERAL REPAIRS</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/service7">
                <img src={service7Img} alt="service7" className="image" /><br/><br/>
                <p className="ser">PERIODIC MAINTENANCE</p>
              </a>
            </td>
            <td>
              <a href="/service8">
                <img src={service8Img} alt="service8" className="image" /><br/><br/>
                <p className="ser">ACCIDENT REPAIRS</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/service9">
                <img src={service9Img} alt="service9" className="image" /><br/><br/>
                <p className="ser">GENERAL WASH</p>
              </a>
            </td>
            <td>
              <a href="/service10">
                <img src={service10Img} alt="service10" className="image" /><br/><br/>
                <p className="ser">GENERAL WASH WITH INTERIOR DETAILING</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/service11">
                <img src={service11Img} alt="service11" className="image" /><br/><br/>
                <p className="ser">NANO TREATMENT</p>
              </a>
            </td>
            <td>
              <a href="/service12">
                <img src={service12Img} alt="service12" className="image" /><br/><br/>
                <p className="ser">LUBE SERVICES</p>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="/service13">
                <img src={service13Img} alt="service13" className="image" /><br/><br/>
                <p className="ser">ENGINE TUNE-UPS</p>
              </a>
            </td>
            <td>
              <a href="/service14">
                <img src={service14Img} alt="service14" className="image" /><br/><br/>
                <p className="ser">UNDER CARRIAGE WASHES</p>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Services;
