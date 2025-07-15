import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__block footer__logo">
          <h2>ServiFácil</h2>
        </div>

        <div className="footer__block footer__about">
          <h3>Sobre</h3>
          <p>
            ServiFácil conecta você aos melhores profissionais da sua cidade de forma fácil, segura e confiável.
          </p>
        </div>

        <div className="footer__block footer__socials">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 ServiFácil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
