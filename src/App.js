import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/HOME/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/DETAILS/Detail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
