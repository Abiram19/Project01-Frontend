<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services";
import Service1 from "./components/service/service1";
import Service2 from "./components/service/service2";
import Service3 from "./components/service/service3";
import Service4 from "./components/service/service4";
import Service5 from "./components/service/service5";
import Service6 from "./components/service/service6";
import Service7 from "./components/service/service7";
import Service8 from "./components/service/service8";
import Service9 from "./components/service/service9";
import Service10 from "./components/service/service10";
import Service11 from "./components/service/service11";
import Service12 from "./components/service/service12";
import Service13 from "./components/service/service13";
import Service14 from "./components/service/service14";
import Layout from "./components/Layout";
import Layout1 from "./components/Layout1";
import Layout2 from "./components/Layout2";
import About from "./components/About";
import Contactus from "./components/Contactus";
import CareerJOB from "./components/career/CareerJOB";
import CareerLife from "./components/career/CareerLife";
import CareerPeople from "./components/career/CareerPeople";
import Career1 from "./components/career/Career1";
import Course from "./components/career/Course";
import Course1 from "./components/Course/Course1";
import Course2 from "./components/Course/Course2";
import Course3 from "./components/Course/Course3";
import Course4 from "./components/Course/Course4";
import Home from "./components/Home/Home";
import LoginRegister from "./components/Home/LoginRegister";
import DashBoard from "./components/Home/DashBoard";
import "./App.css";
import Admin from "./components/Admin";
import User from "./components/User";
import BookingStation04 from "./components/BookingStation04";
import BookingStation01 from "./components/BookingStation01";
import BookingStation02 from "./components/BookingStation02";
import BookingStation03 from "./components/BookingStation03";
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './components/Services';
import Service1 from './components/service/service1';
import Service2 from './components/service/service2';
import Service3 from './components/service/service3';
import Service4 from './components/service/service4';
import Service5 from './components/service/service5';
import Service6 from './components/service/service6';
import Service7 from './components/service/service7';
import Service8 from './components/service/service8';
import Service9 from './components/service/service9';
import Service10 from './components/service/service10';
import Service11 from './components/service/service11';
import Service12 from './components/service/service12';
import Service13 from './components/service/service13';
import Service14 from './components/service/service14';
import Layout from './components/Layout';
import Layout1 from './components/Layout1';
import Layout2 from './components/Layout2';
import Layout3 from './components/Layout3';
import About from './components/About';
import Contactus from './components/Contactus';
import CareerJOB from './components/career/CareerJOB';
import CareerLife from './components/career/CareerLife';
import CareerPeople from './components/career/CareerPeople';
import Career1 from './components/career/Career1';
import Course from './components/career/Course';
import Course1 from './components/Course/Course1';
import Course2 from './components/Course/Course2';
import Course3 from './components/Course/Course3';
import Course4 from './components/Course/Course4';
import Home from './components/Home/Home';
import LoginRegister from './components/Home/LoginRegister';
import DashBoard from './components/Home/DashBoard';
import './App.css';
>>>>>>> 31ed15170d43a97f741caeb23ab3708561a971e9

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/User/*" element={<User />} />
        <Route path="/bookingStation04/*" element={<BookingStation04 />} />
        <Route path="/bookingStation01/*" element={<BookingStation01 />} />
        <Route path="/bookingStation02/*" element={<BookingStation02 />} />
        <Route path="/bookingStation03/*" element={<BookingStation03 />} />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/service1"
          element={
            <Layout>
              <Service1 />
            </Layout>
          }
        />
        <Route
          path="/service2"
          element={
            <Layout>
              <Service2 />
            </Layout>
          }
        />
        <Route
          path="/service3"
          element={
            <Layout>
              <Service3 />
            </Layout>
          }
        />
        <Route
          path="/service4"
          element={
            <Layout>
              <Service4 />
            </Layout>
          }
        />
        <Route
          path="/service5"
          element={
            <Layout>
              <Service5 />
            </Layout>
          }
        />
        <Route
          path="/service6"
          element={
            <Layout>
              <Service6 />
            </Layout>
          }
        />
        <Route
          path="/service7"
          element={
            <Layout>
              <Service7 />
            </Layout>
          }
        />
        <Route
          path="/service8"
          element={
            <Layout>
              <Service8 />
            </Layout>
          }
        />
        <Route
          path="/service9"
          element={
            <Layout>
              <Service9 />
            </Layout>
          }
        />
        <Route
          path="/service10"
          element={
            <Layout>
              <Service10 />
            </Layout>
          }
        />
        <Route
          path="/service11"
          element={
            <Layout>
              <Service11 />
            </Layout>
          }
        />
        <Route
          path="/service12"
          element={
            <Layout>
              <Service12 />
            </Layout>
          }
        />
        <Route
          path="/service13"
          element={
            <Layout>
              <Service13 />
            </Layout>
          }
        />
        <Route
          path="/service14"
          element={
            <Layout>
              <Service14 />
            </Layout>
          }
        />
        <Route
          path="/contactus"
          element={
            <Layout>
              <Contactus />
            </Layout>
          }
        />
        <Route
          path="/career"
          element={
            <Layout>
              <Career1 />
            </Layout>
          }
        />
        <Route
          path="/course"
          element={
            <Layout>
              <Course />
            </Layout>
          }
        />
        <Route
          path="/course1"
          element={
            <Layout>
              <Course1 />
            </Layout>
          }
        />
        <Route
          path="/course2"
          element={
            <Layout>
              <Course2 />
            </Layout>
          }
        />
        <Route
          path="/course3"
          element={
            <Layout>
              <Course3 />
            </Layout>
          }
        />
        <Route
          path="/course4"
          element={
            <Layout>
              <Course4 />
            </Layout>
          }
        />
        <Route
          path="/careerjob"
          element={
            <Layout>
              <CareerJOB />
            </Layout>
          }
        />
        <Route
          path="/careerlife"
          element={
            <Layout>
              <CareerLife />
            </Layout>
          }
        />
        <Route
          path="/careerpeople"
          element={
            <Layout>
              <CareerPeople />
            </Layout>
          }
        />
        <Route
          path="/Home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/LoginRegister"
          element={
            <Layout1>
              <LoginRegister />
            </Layout1>
          }
        />
        <Route
          path="/DashBoard"
          element={
            <Layout2>
              <DashBoard />
            </Layout2>
          }
        />
=======
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="about" element={<Layout3><About /></Layout3>} />
        <Route path="/services" element={<Layout3><Services /></Layout3>} />
        <Route path="/service1" element={<Layout3><Service1 /></Layout3>} />
        <Route path="/service2" element={<Layout3><Service2 /></Layout3>} />
        <Route path="/service3" element={<Layout3><Service3 /></Layout3>} />
        <Route path="/service4" element={<Layout3><Service4 /></Layout3>} />
        <Route path="/service5" element={<Layout3><Service5 /></Layout3>} />
        <Route path="/service6" element={<Layout3><Service6 /></Layout3>} />
        <Route path="/service7" element={<Layout3><Service7 /></Layout3>} />
        <Route path="/service8" element={<Layout3><Service8 /></Layout3>} />
        <Route path="/service9" element={<Layout3><Service9 /></Layout3>} />
        <Route path="/service10" element={<Layout3><Service10 /></Layout3>} />
        <Route path="/service11" element={<Layout3><Service11 /></Layout3>} />
        <Route path="/service12" element={<Layout3><Service12 /></Layout3>} />
        <Route path="/service13" element={<Layout3><Service13 /></Layout3>} />
        <Route path="/service14" element={<Layout3><Service14 /></Layout3>} />
        <Route path="/contactus" element={<Layout3><Contactus /></Layout3>} />
        <Route path="/career" element={<Layout3><Career1 /></Layout3>} />
          <Route path="/course" element={<Layout3><Course /></Layout3>} />
          <Route path="/course1" element={<Layout3><Course1 /></Layout3>} />
          <Route path="/course2" element={<Layout3><Course2 /></Layout3>} />
          <Route path="/course3" element={<Layout3><Course3 /></Layout3>} />
          <Route path="/course4" element={<Layout3><Course4 /></Layout3>} /> 
          <Route path="/careerjob" element={<Layout3><CareerJOB /></Layout3>} />
          <Route path="/careerlife" element={<Layout3><CareerLife /></Layout3>} />
          <Route path="/careerpeople" element={<Layout3><CareerPeople /></Layout3>} />
            <Route path="/Home" element={<Layout><Home /></Layout>} />
            <Route path="/LoginRegister" element={<Layout1><LoginRegister /></Layout1>} />
              <Route path="/DashBoard" element={<Layout2><DashBoard /></Layout2>} />
>>>>>>> 31ed15170d43a97f741caeb23ab3708561a971e9
      </Routes>
    </BrowserRouter>
  );
};

export default App;
