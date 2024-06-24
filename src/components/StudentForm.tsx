import Link from "next/link";
import { useState } from "react";
import { Alert, Badge, Container } from "react-bootstrap";

export default function StudentForm() {
    const url = 'http://127.0.0.1:5185/api/students';
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [serie, setSerie] = useState('');
    const [notaMedia, setNotaMedia] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomePai, setNomePai] = useState('');
    const [nomeMae, setNomeMae] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const [mensagem, setMensagem] = useState('');

    const handleSubmit = async (event) => {
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
            setMensagem('Novo estudante inserido com sucesso.');
        } catch (error) {
            setMensagem(Error.toString());
        }
    };

    return (
        <Container className="w-50">
             <Link href={'/'}><button className='btn btn-secondary my-5'> Voltar </button></Link>
        
            <form onSubmit={handleSubmit}>
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
                    <input required type="date" className="form-control" id="dataNascimento" value={dataNascimento} onChange={(event) => setDataNascimento(event.target.value)} />
                </div>

                <Alert className="mt-2 text-center"> {mensagem} </Alert>
                <button type="submit" className="btn btn-primary">Confirmar</button>
            </form>   
        </Container>
    )
}