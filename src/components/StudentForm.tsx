import Link from "next/link";
import { useState, useEffect } from "react";
import { Alert, Badge, Container } from "react-bootstrap";
import { useRouter } from "next/router";

/**
 * Renders a form for creating or editing student information. 
 * Handles form submission, fetches data to fill the form, and updates student information.
 *
 * @return {JSX.Element} The form for creating or editing student information.
 */
export default function StudentForm() {
    const url = 'http://127.0.0.1:5185/api/students';
    const router = useRouter();

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [notaMedia, setNotaMedia] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomePai, setNomePai] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [mensagem, setMensagem] = useState('');

    /**
     * Asynchronously fetches student data from the API and updates the component's state with the fetched data.
     *
     * @return {Promise<void>} A Promise that resolves when the data has been fetched and the component's state has been updated.
     * @throws {Error} If there is an error fetching the data from the API.
     */
    const handleFillForm = async () => {
        try {
            const response = await fetch(url + "/" + router.query.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Houve um erro ao buscar o estudante.');
            }

            const data = await response.json();
            setNome(data.nome);
            setIdade(data.idade);
            setSerie(data.serie);
            setNotaMedia(data.notaMedia);
            setEndereco(data.endereco);
            setNomePai(data.nomePai);
            setNomeMae(data.nomeMae);
            setDataNascimento(data.dataNascimento);

            setMensagem("Estudante carregado com sucesso!");

        } catch (error) {
            setMensagem("Erro ao buscar o estudante: ");
        }
    };

    useEffect(() => {
        if (router.query.id) {
            handleFillForm();
        }
    }, [router.query.id]);

    /**
     * Submits a form to create a new student and redirects to the home page on success.
     *
     * @param {any} event - The event object triggered by the form submission.
     * @return {Promise<void>} A Promise that resolves when the form submission is complete.
     * @throws {Error} If there is an error inserting the new student.
     */
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    idade,
                    serie,
                    notaMedia,
                    endereco,
                    nomePai,
                    nomeMae,
                    dataNascimento
                })
            });
            if (!response.ok) {
                throw new Error('Houve um erro ao inserir.');
            }
            console.log(await response.json());
            window.alert('Novo estudante inserido com sucesso!');
            router.push('/')
        } catch (error) {
            setMensagem("Erro ao inserir novo estudante: ");
        }
    };

    /**
     * Asynchronously handles the edit event for a student.
     *
     * @param {any} event - The event object triggered by the edit event.
     * @return {Promise<void>} A Promise that resolves when the edit is complete.
     * @throws {Error} If there is an error editing the student.
     */
    const handleEdit = async (event: any) => {
        event.preventDefault();
        try {
            const response = await fetch(url + "/" + router.query.id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome,
                    idade,
                    serie,
                    notaMedia,
                    endereco,
                    nomePai,
                    nomeMae,
                    dataNascimento
                })
            });
            if (!response.ok) {
                throw new Error('Houve um erro ao editar.');
            }
            console.log(await response.json());
            window.alert('Estudante editado com sucesso!');
            router.push('/')
        } catch (error) {
            setMensagem("Erro ao editar o estudante: ");
        }
    };

    return (
        <Container className="w-50">
            <Link href={'/'}><button className='btn btn-secondary my-5'> Voltar </button></Link>

            {router.query.id ? <h1>Editar Estudante</h1> : <h1>Novo Estudante</h1>}

            <form onSubmit={router.query.id ? handleEdit : handleSubmit}>

                {mensagem !== '' && <Alert variant="primary"> {mensagem} </Alert>}

                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input required type="text" className="form-control" id="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="idade" className="form-label">Idade</label>
                    <input required type="number" className="form-control" id="idade" value={idade} onChange={(event) => setIdade(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="serie" className="form-label">Serie</label>
                    <input required type="text" className="form-control" id="serie" value={serie} onChange={(event) => setSerie(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="notaMedia" className="form-label">Nota Media</label>
                    <input required type="number" className="form-control" id="notaMedia" value={notaMedia} onChange={(event) => setNotaMedia(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="endereco" className="form-label">Endereco</label>
                    <input required type="text" className="form-control" id="endereco" value={endereco} onChange={(event) => setEndereco(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nomePai" className="form-label">Nome Pai</label>
                    <input required type="text" className="form-control" id="nomePai" value={nomePai} onChange={(event) => setNomePai(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nomeMae" className="form-label">Nome Mae</label>
                    <input required type="text" className="form-control" id="nomeMae" value={nomeMae} onChange={(event) => setNomeMae(event.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                    <input type="date" className="form-control" id="dataNascimento" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Confirmar</button>
            </form>
        </Container>
    )
}
