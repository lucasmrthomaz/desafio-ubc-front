import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function StudentList() {
    const [students, setStudents] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:5185/api/students');
                const data = await response.json();
                setStudents(data);
            } catch (error) {
                console.error('There was an error fetching the students!', error);
            }
        })();
    }, []);

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
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.nome}</td>
                            <td>{student.idade}</td>
                            <td>{student.serie}</td>
                            <td>{student.notaMedia}</td>
                            <td>{student.endereco}</td>
                            <td>{student.nomePai}</td>
                            <td>{student.nomeMae}</td>
                            <td>{student.dataNascimento}</td>
                            <td>
                                <a href="#">Editar</a> | <a href="#">Excluir</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <small className='my-2 mx-2 float-end'>Total de : <b>{students.length}</b> entrada(s) </small>

            <button className='btn btn-primary'>Adicionar Estudante</button>
        </div>
    );
}
