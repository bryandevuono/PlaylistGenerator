import React from 'react';
import '../index.css';
import logo from '../img/Spotify_Logo_RGB_White-1.png';
import headerimage from '../img/music.png';
const Header = () => {
    return(
        <header>
            <span className='headertext'>Made for</span>
            <img alt='' src={logo} className='spotifylogo'></img>
            <img alt='' src={headerimage} className='headerimage'></img>
        </header>
    );
}   

export default Header;