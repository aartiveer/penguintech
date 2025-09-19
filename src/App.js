import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Trainings from './pages/Trainings';

import FooterSection from './components/FooterSection';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/penguintech' : '/';

  return (
    <Router basename={basename}>
      <Header />
      
      {/* Content pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Trainings" element={<Trainings />} />
        
      </Routes>

      {/* Footer added here to appear on all pages */}
      <FooterSection />
    </Router>
  );
}

export default App;
