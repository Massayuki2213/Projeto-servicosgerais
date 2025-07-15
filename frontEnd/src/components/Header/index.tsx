import { FaSearch, FaUser } from "react-icons/fa";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">ServiFácil</div>

      <nav className="header__nav">
    
        <a href="/servicos">
          <FaSearch className="icon" />
          Serviços
        </a>
        <a href="/sobre">Sobre</a>
        <a href="/contato">Contato</a>
      </nav>

      <div className="header__auth">
        <button className="login-btn">
          <FaUser className="icon " /> 
            Entrar
        </button>
        <button className="register-btn">Cadastrar</button>
      </div>
    </header>
  );
}
