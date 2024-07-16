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
          <Route path="/mood" element={<Home />} />
          <Route path="/genre" element={<Home />} />
          <Route path="/custom" element={<Home />} />
        </Routes>
    </Router>
  );
  
}
function Home() {
  return (
    <div className='homepage'>
      <h1 className='homepagetext'>Playlist Generator</h1>
      
      <div className='text'>
      <p>
        Unlock Your Perfect Soundtrack!
        <br/>
        <br/>
        Introducing Playlist Genie, your ultimate music companion for crafting the perfect playlist! <br/>Whether you’re looking to set the mood for a party, chill out after a long day, or <br/>discover new favorites, Playlist Genie makes it easy to generate personalized playlists tailored to your unique taste.
      </p>
      </div>
      <br/>

      <div className='buttons'>
      <button>Example</button>
      <br/>
      <button>Example</button>
      <br/>
      <button>Example</button>
      </div>
    </div>
  );
}

export default App;
