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
      <div className='text'>
        <br />
        <br />
        <br />
        <p>What kind of playlist do you want?:</p>
      </div>
      <br />
      <br />
      <div className='dropdown'>
      <label for="moods">Choose a genre:</label>
        <select name="mood" id="mood" className='dropdownbox'>
        <option value="Happy pop">Happy</option>
        <option value="sad and acoustic">Sad</option>
        <option value="High BPM">Energetic</option>
        <option value="R&B and soul">Chill</option>
        </select>
      </div>
      <br />
      <br />
      <div className='buttons'>
        <button className='btn' onClick={handleConfirm}>
          Confirm
        </button>
        <br />
        <br />
        <Link to='/'>
          <button className='btn'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Mood;
