import {useState} from 'react';
import '../index.css';
import '../btn.css';
import { useLocation, Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import Facebook from '../img/fb.png';
import Twitter from '../img/twitter.png';
import Instagram from '../img/instagram.png';

const Result = () =>{
  const [preview, setPreview] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  // copy to clipboard
  const Copy = () =>{
    navigator.clipboard.writeText(url);
    //popup here
    setOpen(o => !o);
  }
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

  //redirect
  const redirectToFB = () => {
    window.open("https://www.facebook.com")
  }
  const redirectToIG = () => {
    window.open("https://www.instagram.com/")
  }
  const redirecttoTW = () => {
    window.open("https://www.x.com/")
  }
  return (
    <div className='homepage'>
      <br/><br/>
      <div className='resulttext'>
        <p>Here is your Playlist!<br/>You can copy the link to access it:</p>
        <p>{url} <button onClick={Copy} id='copy' className='btn-small'>Copy</button></p>
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
      
      <Popup open={open} closeOnDocumentClick onClose={closeModal} overlayStyle={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="modal">
          <p className= 'modaltext' onClick={closeModal}>
            The link is Copied! <br/><br/>
            Share it with your friends:
          </p>
          <button onClick={closeModal} className='closemodal'>X</button>
          
          <div className='icons'>
            <button className='icon' onClick={redirectToFB}><img alt='' className='icon-image' src={Facebook}></img></button>
            <button className='icon' onClick={redirecttoTW}><img alt='' className='icon-image' src={Twitter}></img></button>
            <button className='icon' onClick={redirectToIG}><img alt='' className='icon-image' src={Instagram}></img></button>
          </div>

        </div>
      </Popup>
    </div>
  );
};
export default Result;