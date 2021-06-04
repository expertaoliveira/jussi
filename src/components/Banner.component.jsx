import { Link, BrowserRouter } from 'react-router-dom';

import refrigerador from '../img/refrigerador.png';
import batedeira from '../img/batedeira.png';
import wisk from '../img/wisk.png';
import logobrastemp from '../img/logo-brastemp.png';
import logoconsul from '../img/logo-consul.png';
import logothebar from '../img/logo-thebar.png';
import logocompracerta from '../img/logo-compra-certa.png';

import './Banner.style.css';

export default function Banner() {
  return (
    <section className="banner-section">
      <BrowserRouter>
        <div className="banner">
          <div className="container">
            <div className="row">
              <h1>Criamos lojas que vendem mais.</h1>
              <p>
                A Jüssi é especialista na criação de lojas usando a plataforma
                VTEX. Precisa criar sua loja ou migrar de plataforma?
              </p>
              <Link to="">Veja nossas soluções</Link>
            </div>
            <div className="row">
              <div className="cards-container">
                <div className="cards img1">
                  <div className="card-img">
                    <img src={refrigerador} />
                  </div>
                  <div className="card-btn">
                    <Link to="">Mais Detalhes</Link>
                  </div>
                </div>
                <div className="cards img3">
                  <div className="card-img">
                    <img src={wisk} />
                  </div>
                  <div className="card-btn">
                    <Link to="">Adicionar à sacola</Link>
                  </div>
                </div>
                <div className="cards img2">
                  <div className="card-img">
                    <img src={batedeira} />
                  </div>
                  <div className="card-btn">
                    <Link to="">Comprar em 12x</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lojas" id="solutions">
          <div className="container">
            <div className="row">
              <span>Nossas principais lojas VTEX</span>
              <span className="arrow">→</span>
              <img src={logobrastemp} alt="logo brastemp" />
              <img src={logocompracerta} alt="logo compra certa" />
              <img src={logoconsul} alt="logo consul" />
              <img src={logothebar} alt="logo the bar" />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </section>
  );
}
