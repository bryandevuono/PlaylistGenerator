import React from 'react';
import '../index.css';
import logo from '../img/Spotify_Logo_RGB_White-1.png';
import headerimage from '../img/music.png';
import {Link} from 'react-router-dom';

const Header = () => {
    const login = () =>{
        window.open("http://127.0.0.1:5000/api/login");
    }
    return(
        <header className='header'>
            <span className='headertext'>Made for</span>
            <img alt='' src={logo} className='spotifylogo'></img>
            <Link to='/'><img alt='' src={headerimage} className='headerimage'></img></Link>
            <p onClick={login} className='loginbtn'>Login to Spotify</p>
        </header>
    );
}   

export default Header;