import { useState } from 'react';
import { Cards } from './Cards.component';

import './Solutions.style.css';

export const Solutions = () => {
  const [products, setProduct] = useState([
    {
      id: 1,
      product: 'P1',
      product_name: 'Nome do Produto #1',
      product_desc: 'Descrição do produto #1',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      url: '',
    },
    {
      id: 2,
      product: 'P2',
      product_name: 'Nome do Produto #2',
      product_desc: 'Descrição do produto #2',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      url: '',
    },
    {
      id: 3,
      product: 'P3',
      product_name: 'Nome do Produto #3',
      product_desc: 'Descrição do produto #3',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      url: '',
    },
    {
      id: 4,
      product: 'P4',
      product_name: 'Nome do Produto #4',
      product_desc: 'Descrição do produto #4',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      url: '',
    },
  ]);

  return (
    <section className="slide2">
      <div className="container">
        <div className="row">
          <h3>Nossas soluções</h3>
        </div>
        <div className="row cards">
          {products.map((product) => (
            <div key={product.id}>
              <Cards product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
