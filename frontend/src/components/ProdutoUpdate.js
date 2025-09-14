import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ProdutoUpdate() {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigator = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/produtos/${id}`)
            .then(response => {
                setNome(response.data.nome);
                setPreco(response.data.preco);
            })
            .catch(error => console.error(error));
    }, [id]);

    const updateProduto = (e) => {
        e.preventDefault();
        const produto = { nome, preco };
        axios.put(`http://localhost:8080/produtos/${id}`, produto)
            .then(() => {
                setMensagem('Produto atualizado com sucesso')
                setTimeout(() => {
                    navigator('/dashboard')
                }, 2000)
            })
            .catch(error => console.error(error));
    };

    const deleteProduto = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8080/produtos/${id}`)
            .then(() => {
                setMensagem('Produto removido com sucesso')
                setTimeout(() => {
                    navigator('/dashboard')
                }, 2000)
            })
            .catch(error => console.error(error))
    };

    return (
        <div className="container w-50 my-5">
            {mensagem && <div className='alert alert-success'>{mensagem}</div>}
            <form>
                <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Preço:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                </div>
                <div className='container text-center'>
                {/* Botão para atualizar o produto */}
                <button
                    type="button"
                    className="btn btn-dark me-3"
                    onClick={updateProduto}
                >
                    Atualizar
                </button>
                {/* Botão para deletar o produto */}
                <button type="button" className="btn btn-danger me-3" onClick={deleteProduto}>
                    Deletar
                </button>
                <Link to={`/dashboard`} className='btn btn-warning shadow-lg'>Dashboard</Link>
                </div>
            </form>
        </div>
    );
}

export default ProdutoUpdate;
