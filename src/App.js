import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import Trainings from './pages/Trainings';
import Blogs from './pages/Blogs';

import FooterSection from './components/FooterSection';

// blogs pages
import Post1 from './pages/blog1/Post1';
import Post2 from './pages/blog2/Post2';
import Post3 from './pages/blog3/Post3';
import Post4 from './pages/blog4/Post4';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/' : '/';

  return (
    <Router basename={basename}>
      <Header />
      
      {/* Content pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Trainings" element={<Trainings />} />

        <Route path="/blog/1" component={Post1} />
        <Route path="/blog/2" component={Post2} />
        <Route path="/blog/3" component={Post3} />
        <Route path="/blog/4" component={Post4} />
        
      </Routes>

      {/* Footer added here to appear on all pages */}
      <FooterSection />
    </Router>
  );
}

export default App;
