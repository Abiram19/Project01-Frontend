import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <main>
        <p text-align="center">Ithila thaan michcha body content varum. See the code in line 101</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
