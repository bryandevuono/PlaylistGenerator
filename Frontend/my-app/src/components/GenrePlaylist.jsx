import React from 'react';
import { Link } from 'react-router-dom';
import useAPIGenre from '../hooks/useAPIGenre';
import '../index.css';
import '../btn.css';

const Genre = () => {
  const fetchAPI = useAPIGenre("");

  const handleConfirm = () => {
    let input = document.getElementById('genre').value;
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
      <label for="genres">Choose a genre:</label>
        <select name="genre" id="genre" className='dropdownbox'>
        <option value="Rap">Rap</option>
        <option value="Pop">Pop</option>
        <option value="R&B">R&B</option>
        <option value="Rock">Rock</option>
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

export default Genre;
