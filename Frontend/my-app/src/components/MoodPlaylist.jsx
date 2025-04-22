import React from 'react';
import { Link } from 'react-router-dom';
import useAPICustom from '../hooks/useAPICustom';
import '../index.css';
import '../btn.css';

const Mood = () => {
  const fetchAPI = useAPICustom("");

  const handleConfirm = () => {
    let input = document.getElementById('mood').value;
    fetchAPI(input);
  };

  return (
    <div className='homepage'>
      <div className='menu-screen' style={{height: "20%"}}>
         <div>
            <p>What kind of playlist do you want?:</p>
         </div>
         <div className='dropdown'>
            <label for="moods">Choose a genre:</label><br/>
            <select name="mood" id="mood" className='dropdownbox'>
               <option value="Happy pop">Happy</option>
               <option value="sad and acoustic">Sad</option>
               <option value="High BPM">Energetic</option>
               <option value="R&B and soul">Chill</option>
            </select>
         </div>
         <div className='buttons-genre'>
           <button className='btn' onClick={handleConfirm}>
             Confirm
           </button>
           <Link to='/'>
             <button className='btn'>Back</button>
           </Link>
         </div>
      </div>
    </div>
  );
};

export default Mood;
