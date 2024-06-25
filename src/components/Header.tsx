import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorClosed, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {

  let [usuario, setUsuario] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const username = localStorage.getItem('user');
      setUsuario(username ? username : '');
    }
  }, [])

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.reload();
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="https://www.ubc.org.br/images/logo_principal.png" height={"40px"}></img> Desafio UBC</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/"> <FontAwesomeIcon icon={faHome} /> Home </a>
            </li>
          </ul>
          <small className="m-3">
          <FontAwesomeIcon icon={faUser} />  Olá, <b className="text-uppercase"> {usuario ? usuario : 'Convidado'} </b>
          </small>
          <Link href="#" onClick={logout} ><button className="btn btn-secondary"> Sair <FontAwesomeIcon icon={faDoorClosed} /> </button></Link>
        </div>
      </div>
    </nav>
  );
};
