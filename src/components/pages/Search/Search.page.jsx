import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Search.style.css';

export const Result = () => {
  const { find } = useParams();
  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    const url =
      'https://my-json-server.typicode.com/expertaoliveira/fakeAPI/products?product=' +
      find;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setResultSearch(json);
      });
  }, [find]);

  return (
    <section className="search">
      <div className="container">
        <h3>
          {resultSearch.length > 0
            ? 'Encontramos os seguintes resultados para a palavra:' + find
            : 'Não foram encontrados registros para esta consulta'}
        </h3>
        <div className="result-list">
          {resultSearch.map((result) => {
            return (
              <div className="result-item" key={result.id}>
                <div className="thumb">
                  <img src={result.url} alt={result.product} />
                </div>
                <div>
                  <div>Produto:</div>
                  <div>{result.product}</div>
                </div>
                <div>
                  <div>Modelo:</div>
                  <div>{result.model}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
