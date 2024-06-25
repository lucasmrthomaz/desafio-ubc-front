import { useState } from 'react';
import { useRouter } from 'next/router'
import { Alert } from 'react-bootstrap';

/**
 * Renders a login form component.
 *
 * @return {JSX.Element} The login form component.
 */
export default function Login(): JSX.Element {
  const [usuario, setUsuario] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter()

  /**
   * Handles the form submission for the login form.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The event object representing the form submission.
   * @return {Promise<void>} A promise that resolves when the login is successful or rejects with an error.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5185/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: usuario, password: password })
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data);

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user);

      router.push('/')

    } catch (error) {

      console.error('Houve um erro na tentativa de login: ', error);

      const loginMessage = document.getElementById("loginMessage");

      if (loginMessage) {
        loginMessage.innerHTML = "<b> Nome de usuário/senha inválidos. </b>";
        loginMessage.style.setProperty('color', 'red');
      }

    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h3 className="text-center">
                <img src='https://www.ubc.org.br/images/logo_principal.png' height={"64px"}></img> <br />
                Entrar
              </h3>
              <Alert id="loginMessage">Por favor, faça o login.</Alert>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="usuario">Usuário</label>
                  <input
                    type="text"
                    className="form-control"
                    id="usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
