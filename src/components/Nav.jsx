import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from "../assets/logos/logo.svg"

function Nav() {
  return (
    <>
      <header className="menu">
        <nav className="nav-menu">
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
          <ul>
            <Link to="/" className="tlink anchor">
              Home
            </Link>{' '}
            {''}
            <Link to="/sobre" className="tlink anchor">
              Sobre
            </Link>
            <Link to="/contato" className="tlink anchor ">
              Contato
            </Link>

            <Link to="/ListaProduto" className="tlink anchor ">
              Produtos
            </Link>

            <Link to="/ExemploApi" className="tlink anchor">
              Dados de envio
            </Link>

            <Link to="/login" className="tlink anchor">
              Login
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
