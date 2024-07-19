import React from 'react';
import { Link } from 'react-router-dom';
import useAPICustom from '../hooks/useAPICustom';
import '../index.css';

const Custom = () => {
  const fetchAPI = useAPICustom("");

  const handleConfirm = () => {
    let input = document.getElementById('textarea').value;
    fetchAPI(input);
  };

  return (
    <div>
      <div className='text'>
        <br />
        <br />
        <br />
        <p>What kind of playlist do you want?:</p>
      </div>
      <br />
      <br />
      <div className='textarea'>
        <textarea id='textarea'></textarea>
      </div>
      <br />
      <br />
      <div className='buttons'>
        <button className='button' onClick={handleConfirm}>
          Confirm
        </button>
        <br />
        <br />
        <Link to='/'>
          <button className='button'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Custom;
