import React from 'react';
import '../index.css';
import {useParams} from 'react-router-dom';

const Result = () =>{
    const {url} = useParams();
    const playlistId = url.split('/').pop().split('?')[0];
    console.log(playlistId);
  return (
    <div>
      <div>
      <h2>Spotify Playlist Preview</h2>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}`}
        width="300"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
      </div>
    </div>
  );
};

export default Result;