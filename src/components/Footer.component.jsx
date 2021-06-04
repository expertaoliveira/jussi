import './Footer.style.css';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import linkedin from '../img/linkedin.svg';
import wppcompany from '../img/wppcompany.svg';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <img src={wppcompany} alt="wpp company" />
        </div>
        <div className="row">
          <a
            href="https://www.facebook.com/agencia.jussi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook jussi" />
          </a>
          <a
            href="https://instagram.com/jussi?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="wpp company" />
          </a>
          <a
            href="https://www.linkedin.com/company/agencia-jussi/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin jussi" />
          </a>
        </div>
      </div>
    </footer>
  );
}
