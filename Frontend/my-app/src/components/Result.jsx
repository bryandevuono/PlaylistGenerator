import {useState} from 'react';
import '../index.css';
import { useLocation} from 'react-router-dom';

const Result = () =>{
  const [preview, setPreview] = useState(false);

  const showPreview = (ref) => {
    if(!preview){
    setTimeout(() => {
      setPreview(true)
    }, 1000);
    }
    else{
      setPreview(false)
    }
  }
  const location = useLocation();
  const state = location.state || {};
  const url = state.link;
  console.log(url);  
  const playlistId = url.split('/').pop().split('?')[0];
  console.log(playlistId);
  return (
    <div className='homepage'>
      <br/><br/>
      <div className='resulttext'>
        <p>Here is your Playlist!<br/>You can copy the link to access it:</p>
        <p>{url}</p>
      </div>

      {preview ?<div className='preview'>
      <h2>Spotify Playlist Preview</h2>
      <iframe
        src={`https://open.spotify.com/embed/playlist/${playlistId}`}
        width="300"
        height="380"
        allow="encrypted-media"
        title="Spotify Playlist"
      ></iframe>
      </div>: null}

      <button className='previewbutton' onClick={showPreview}>Show preview</button>
    </div>
  );
};
export default Result;