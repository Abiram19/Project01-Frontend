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

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
