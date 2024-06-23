import Link from "next/link";

const Header: React.FC = () => {
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
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Estudantes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gerenciar Usuários</a>
            </li>
          </ul>
          <small>
            Olá, <b>LUCAS</b>
          </small>
        </div>
      </div>
    </nav>
  );
};

export default Header;
