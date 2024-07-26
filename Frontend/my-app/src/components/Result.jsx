import {useState} from 'react';
import '../index.css';
import '../btn.css';
import { useLocation, Link} from 'react-router-dom';

const Result = () =>{
  const [preview, setPreview] = useState(false);

  const showPreview = () => {
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
        <p>{url} <button className='btn-small'>Copy</button></p>
        <button onClick={showPreview} className='btn'>Show preview</button>

        {preview ?<div>
        <br/>
        <iframe className='previewbox'
          src={`https://open.spotify.com/embed/playlist/${playlistId}`}
          width="500"
          height="480"
          allow="encrypted-media"
          title="Spotify Playlist"
        ></iframe>
        <br/><br/>
        </div>: null}
        
        <div className='homepsn'>
          <Link to='/'><button className='home'>Home</button></Link>
        </div>
      </div>
    </div>
  );
};
export default Result;