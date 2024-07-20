import {useState} from 'react';
import '../index.css';
import { useLocation, Link} from 'react-router-dom';

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
        <p>{url} <button>Copy</button></p>
        <button onClick={showPreview}>Show preview</button>

        {preview ?<div>
        <br/>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${playlistId}`}
          width="500"
          height="580"
          allow="encrypted-media"
          title="Spotify Playlist"
        ></iframe>
        <br/><br/><Link to='/'><button>Home</button></Link>
        </div>: null}
      </div>
    </div>
  );
};
export default Result;