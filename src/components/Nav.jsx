import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from "../assets/logos/logo.svg"

function Nav() {
  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
            <Link to="/" className="tlink">
              <img src={logo} alt="" />
            </Link>
          <ul>
            <Link to="/" className="tlink">
              Home
            </Link>{' '}
            {''}
            <Link to="/sobre" className="tlink">
              Sobre
            </Link>
            <Link to="/contato" className="tlink">
              Contato
            </Link>

            <Link to="/ListaProduto" className="tlink">
              Produtos
            </Link>

            <Link to="/ExemploApi" className="tlink">
              Dados de envio
            </Link>

            <Link to="/login" className="tlink">
              Login
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
