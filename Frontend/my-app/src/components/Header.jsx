import React from 'react';
import '../index.css';
import logo from '../img/Spotify_Logo_RGB_White-1.png';
const Header = () => {
    return(
        <header>
            <span className='headertext'>Made for</span>
            <img src={logo} className='spotifylogo'></img>
        </header>
    );
}   

export default Header;