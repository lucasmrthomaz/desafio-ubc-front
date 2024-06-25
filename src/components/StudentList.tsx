import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import React from 'react';

export default function StudentList() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    /**
     * Fetches student data from the API and sets the state with the fetched data.
     */
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


  /**
   * Formats a given date string into a specific format.
   *
   * @param {string} dateString - The date string to format.
   * @return {string} The formatted date in the format dd/mm/yyyy.
   */
  const formatDate = function (dateString: string) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
  }


  /**
   * Deletes a student by their ID.
   *
   * @param {number} id - The ID of the student to delete.
   * @return {Promise<void>} - A promise that resolves when the student is successfully deleted, or rejects with an error if the deletion fails.
   */
  const deleteStudent = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5185/api/students/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        alert('Erro ao deletar');
        throw new Error('Failed to delete student');
      } else {
        window.location.reload();
        window.alert('Estudante deletado com sucesso!');
      }
    } catch (error) {
      console.error('There was an error deleting the student!', error);
    }

  }

  return (
    <div className='text-center'>
      <h1>Estudantes</h1>
      <Link href={'/gerenciar'}><button className='btn btn-primary m-3'><FontAwesomeIcon icon={faAdd} /> Cadastrar </button></Link>
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
                <button className="btn btn-danger" onClick={() => deleteStudent(id)}> <FontAwesomeIcon icon={faTrash} /> </button>
                <button className='btn btn-warning mx-2' onClick={() => window.location.href = `/gerenciar/?id=${id}&action=edit`}>   <FontAwesomeIcon icon={faEdit} /> </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <small className='my-2 mx-2 float-end'>Total de : <b>{students.length}</b> entrada(s) </small>


    </div>
  );
}
