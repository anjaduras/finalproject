import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NjuraCourse from './components/NjuraCourse';
import Dictionary from './components/Dictionary';
import Game from './components/Game';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/njuracourse" element={<NjuraCourse/>} />
      <Route path="/dictionary" element={<Dictionary/>} />
      <Route path="/game" element={<Game/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
