import React from 'react';
import '../index.css';
import { useLocation } from 'react-router-dom';
const Result = () =>{
  const location = useLocation();
  const state = location.state || {};
  const url = state.link;
  console.log(url);  
  const playlistId = url.split('/').pop().split('?')[0];
    console.log(playlistId);
  window.location.reload();

  return (
    <div>
      <div className='preview'>
      <h2>Spotify Playlist Preview</h2>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}`}
        width="300"
        height="380"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
      </div>
    </div>
  );
};

export default Result;