import { useRef } from 'react';
import '../css/estilo.css';
import Home from './Home';

function Login() {
  /* Hook- useRef ele retorna uma referencia a um elemento ou componentsem tem que ter que ser
  renderizado novamente*/
  const usuario = useRef();
  const senha = useRef();

  /*pegando os dados de usuario e senha e gravando na sessão */
  const getUsuario = sessionStorage.getItem('usuario');
  const getSenha = sessionStorage.getItem('senha');

  const handleSubmit = () => {
    if (usuario.current.value == 'Admin' && senha.current.value == '12345') {
      //criando um token de autenticação
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem('usuario', 'Admin');
      sessionStorage.setItem('senha', token);
    } else {
      alert('Usuario e senha Inválidos !!!');
    }
  };

  return (
    <section className="login">
      {getUsuario && getSenha ? (
        <Home/>
      ) : (
        <form onSubmit={handleSubmit} >
          <h1>Login</h1>
          <p>
            USUÁRIO:
            <input type="text" placeholder="Digite seu Usuário" ref={usuario} />
          </p>
          <p>
            SENHA:
            <input type="password" placeholder="Digite sua senha" ref={senha} />
          </p>
          <button className='botao' type="submit">ENTRAR</button>
        </form>
      )}
    </section>
  );
}
export default Login;
