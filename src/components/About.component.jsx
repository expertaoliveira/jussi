import { BrowserRouter, Link } from 'react-router-dom';

import './About.style.css';
import jussi from '../img/image-jussi.jpg';

export default function About() {
  return (
    <section className="slide3" id="about">
      <BrowserRouter>
        <div className="container">
          <div className="row">
            <h3>Olá, somos a Jüssi</h3>
            <p>
              A Jüssi é uma agência integrante do grupo global WPP que vem há 10
              anos consolidando o pensamento voltado para produtos e resolução
              de problemas. Nosso área dedicada exclusivamente para Produtos
              Digitais é organizada em 6 especialidades: Product Managamenet,
              User Experience Design, SEO, Tecnologia, Agile e User Behavior
              Analytics.
            </p>
            <Link to="">Conheça a Jüssi</Link>
          </div>
          <div className="row">
            <img src={jussi} alt="Jüssi Office" />
          </div>
        </div>
      </BrowserRouter>
    </section>
  );
}
