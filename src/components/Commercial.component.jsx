import { BrowserRouter, Link } from 'react-router-dom';

import './Commercial.style.css';

export default function Commercial() {
  return (
    <section className="slide4">
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <h3>
              Essa loja foi construída usando uma das nossas soluções da
              plataforma VTEX. tenha a sua.
            </h3>
            <p>Entre em contato</p>
            <a
              href="mailto://comercial@jussi.com.br"
              target="_blank"
              rel="noreferrer"
            >
              comercial@jussi.com.br
            </a>
          </div>
        </div>
      </BrowserRouter>
    </section>
  );
}
