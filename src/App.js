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
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
