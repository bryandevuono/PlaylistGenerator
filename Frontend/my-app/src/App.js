import React from 'react';
import './index.css';
import './btn.css';
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Custom from './components/CustomPlaylist.jsx';
import Genre from './components/GenrePlaylist.jsx';
import Result from './components/Result.jsx';
import Mood from './components/MoodPlaylist.jsx';
import homepageImage from './img/Inleiding-219662413-1200x768.jpg';
import homepageImage2 from './img/User flow-bro.jpg';
function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/result" element={<Result/>}/>
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
        Introducing Playlist Genie, your ultimate music companion for crafting the perfect playlist! <br/>Whether you’re looking to set the mood for a party, chill out after a long day, or <br/>discover new favorites, Playlist Genie makes it easy to generate personalized playlists tailored to you.
        <br/><br/>
        Make a playlist based on:
      </p>
      </div>
      <br/><br/>

      <div className='buttons'>
      <Link to ='/genre'><button className='btn'>Genre</button></Link>
      <br/><br/>
      <Link to='/mood'><button className='btn'>Mood</button></Link>
      <br/><br/>
      <Link to = '/custom'><button className='btn'>Custom</button></Link>
      </div>
      <img className="homepageImg" alt="" src={homepageImage}></img>
      <br/>
      
      <p className='description-custom'>The custom query function is designed to create<br/> personalized playlists based on a user's specific preferences. <br/>This function accepts a range of input parameters,<br/> including music genres, mood, tempo, era, <br/>and artist preferences, to generate a curated <br/> playlist that aligns with the user's unique taste</p>
      
      <img src={homepageImage2} className="homepageImg2" alt=''></img>
      <div className='get-started'>
        <Link to = '/custom'><button className='btn'>Get Started</button></Link>
      </div>
    </div>
  );
}

export default App;
