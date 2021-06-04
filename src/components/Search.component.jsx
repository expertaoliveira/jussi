import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import search from '../img/search.svg';
import './Search.style.css';

export const Search = () => {
  const [findWord, setFindWord] = useState('');
  const [sendWord, setSendWord] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (sendWord != '') {
      history.push('/result/' + sendWord);
      //let pathUrl = window.location.href;
      //window.location.href = pathUrl;
    }
    return () => {
      setSendWord('');
    };
  }, [history, sendWord]);

  return (
    <div className="search-container">
      <input
        type="search"
        onChange={() => setFindWord(window.event.target.value)}
        required
      />
      <button type="button" onClick={() => setSendWord(findWord)}>
        <img src={search} />
      </button>
    </div>
  );
};
