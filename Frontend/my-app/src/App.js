import React from 'react';
import './index.css';
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
  
}
function Home() {
  return (
    <div className='homepage'>
      <h1 className='homepagetext'>Playlist Generator</h1>
      <br/>
      <button className='button'>Example</button>
      <br/>
      <button className='button'>Example</button>
      <br/>
      <button className='button'>Example</button>
    </div>
  );
}

export default App;
