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
import Layout2 from './components/Layout2'
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
        <Route path="about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/service1" element={<Layout><Service1 /></Layout>} />
        <Route path="/service2" element={<Layout><Service2 /></Layout>} />
        <Route path="/service3" element={<Layout><Service3 /></Layout>} />
        <Route path="/service4" element={<Layout><Service4 /></Layout>} />
        <Route path="/service5" element={<Layout><Service5 /></Layout>} />
        <Route path="/service6" element={<Layout><Service6 /></Layout>} />
        <Route path="/service7" element={<Layout><Service7 /></Layout>} />
        <Route path="/service8" element={<Layout><Service8 /></Layout>} />
        <Route path="/service9" element={<Layout><Service9 /></Layout>} />
        <Route path="/service10" element={<Layout><Service10 /></Layout>} />
        <Route path="/service11" element={<Layout><Service11 /></Layout>} />
        <Route path="/service12" element={<Layout><Service12 /></Layout>} />
        <Route path="/service13" element={<Layout><Service13 /></Layout>} />
        <Route path="/service14" element={<Layout><Service14 /></Layout>} />
        <Route path="/contactus" element={<Layout><Contactus /></Layout>} />
        <Route path="/career" element={<Layout><Career1 /></Layout>} />
          <Route path="/course" element={<Layout><Course /></Layout>} />
          <Route path="/course1" element={<Layout><Course1 /></Layout>} />
          <Route path="/course2" element={<Layout><Course2 /></Layout>} />
          <Route path="/course3" element={<Layout><Course3 /></Layout>} />
          <Route path="/course4" element={<Layout><Course4 /></Layout>} /> 
          <Route path="/careerjob" element={<Layout><CareerJOB /></Layout>} />
          <Route path="/careerlife" element={<Layout><CareerLife /></Layout>} />
          <Route path="/careerpeople" element={<Layout><CareerPeople /></Layout>} />
            <Route path="/Home" element={<Layout><Home /></Layout>} />
            <Route path="/LoginRegister" element={<Layout1><LoginRegister /></Layout1>} />
              <Route path="/DashBoard" element={<Layout2><DashBoard /></Layout2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
