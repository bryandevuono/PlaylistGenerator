import React from 'react';
import { Link } from 'react-router-dom';
import useAPICustom from '../hooks/useAPICustom';
import '../index.css';
import '../btn.css';

const Custom = () => {
  const fetchAPI = useAPICustom("");

  const handleConfirm = () => {
    let input = document.getElementById('textarea').value;
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
      <div className='textarea'>
        <textarea id='textarea' className='textbox'></textarea>
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

export default Custom;
