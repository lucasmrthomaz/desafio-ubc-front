import Link from 'next/link';
import React from 'react';

export default function StudentList() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5185/api/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('There was an error fetching the students!', error);
      }
    };

    fetchData();
  }, []);

 // Utility function to format the date
 function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
  
  return (
    <div>
      <h1>Estudantes</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Idade</th>
            <th scope="col">Serie</th>
            <th scope="col">Nota Media</th>
            <th scope="col">Endereco</th>
            <th scope="col">Nome Pai</th>
            <th scope="col">Nome Mae</th>
            <th scope="col">Data de Nascimento</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {students.map(({ id, nome, idade, serie, notaMedia, endereco, nomePai, nomeMae, dataNascimento }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{nome}</td>
              <td>{idade}</td>
              <td>{serie}</td>
              <td>{notaMedia}</td>
              <td>{endereco}</td>
              <td>{nomePai}</td>
              <td>{nomeMae}</td>
              <td>{formatDate(dataNascimento)}</td>
              <td>
                <a href="#">Editar</a> | <a href="#">Excluir</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <small className='my-2 mx-2 float-end'>Total de : <b>{students.length}</b> entrada(s) </small>

      <Link href={'/gerenciar'}><button className='btn btn-primary'>Adicionar Estudante</button></Link>
    </div>
  );
}
