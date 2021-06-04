import { BrowserRouter, Link } from 'react-router-dom';

import './Cards.style.css';

export const Cards = (product) => {
  const prod = product.product;

  console.log(prod);
  return (
    <div className="product-card">
      <div className="product">{prod.product}</div>
      <div className="product-card-details">
        <div className="product-name">{prod.product_name}</div>
        <div className="product-desc">{prod.product_desc}</div>
        <div className="product-features">
          <ul>
            {prod.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="product-action">
          <BrowserRouter>
            <Link to={prod.url}>Ver solução</Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};
