import React from 'react';
import './App.css';
import Navbar from'./components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
          <Route path='/about' component={'./about/About.js'} />
        </Routes>
        <div className='body'>
          <h1>Recent Posts</h1>
          <div>
            hello
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;