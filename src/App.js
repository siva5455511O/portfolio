import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './datas/page/Hero';
import Header from './datas/page/Header';
import About from './datas/page/About';
import Skills from './datas/page/Skillls';
import Experience from './datas/page/Experience';
import Projects from './datas/page/Project';
import Home from './datas/page/Home';

function App() {
  return (
    <Router>
      <div >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />  {/* ✅ Added Skills Route */}
          <Route path="/experience" element={<Experience />} />  {/* ✅ Added Experience Route */}
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
