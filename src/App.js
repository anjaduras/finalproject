import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NjuraCourse from './components/NjuraCourse';
import Dictionary from './components/Dictionary';
import Game from './components/Game';
import About from './components/About';
import International from './components/International';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/njuracourse" element={<NjuraCourse/>} />
      <Route path="/dictionary" element={<Dictionary/>} />
      <Route path="/game" element={<Game/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/international" element={<International/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
