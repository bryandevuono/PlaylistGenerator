import React from 'react';
import './index.css';
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Custom from './components/CustomPlaylist.jsx';
import Result from './components/Result.jsx';
function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<Home />} />
          <Route path="/genre" element={<Home />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/result:url" element={<Result/>}/>
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
        <br/><br/>
        Make a playlist based on:
      </p>
      </div>
      <br/><br/>

      <div className='buttons'>
      <button className='button'>Genre</button>
      <br/><br/>
      <button className='button'>Mood</button>
      <br/><br/>
      <Link to = '/custom'><button className='button'>Custom</button></Link>
      </div>
    </div>
  );
}

export default App;
