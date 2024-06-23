export default function StudentsList() {
    return (
        <div>
            <h1>Estudantes</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#Id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Idade</th>
                        <th scope="col">Serie</th>
                        <th scope="col">Nota Media</th>
                        <th scope="col">Endereco</th>
                        <th scope="col">Nome Pai</th>
                        <th scope="col">Nome Mae</th>
                        <th scope="col">Data Nascimento</th>
                        <th scope="col">Ações</th>
                  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lucas </td>
                        <td>28</td>
                        <td>3</td>
                        <td>9.0</td>
                        <td>R. Existente</td>
                        <td>Juvenil</td>
                        <td>Sandra</td>
                        <td>30/03/2000</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Fulano</td>
                        <td>28</td>
                        <td>3</td>
                        <td>9.0</td>
                        <td>R. Existente</td>
                        <td>Juvenil</td>
                        <td>Sandra</td>
                        <td>30/03/2000</td>
                    </tr>
                    <tr>
                        <th scope="row">-</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <button className="btn btn-primary">Adicionar Estudante</button>
        </div>
    );
}
