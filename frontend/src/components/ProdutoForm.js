import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ProdutoForm() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [mensagem, setMensagem] = useState('');
    const navigator = useNavigate();

    const salvarProduto = (e) => {
        e.preventDefault();
        const produto = { nome, preco };
        axios.post('http://localhost:8080/produtos', produto)
            .then(() => {
                setMensagem('Produto adicionado com sucesso');
                setTimeout(() => {
                    navigator('/dashboard')
                }, 2000)
            })
            .catch(error => console.error(error));
    };

    return (
        <div>
            {mensagem && <div className='alert alert-success w-50 container text-center mt-3'>{mensagem}</div>}
            <div className='container my-3'>
            <form className='container w-50' onSubmit={salvarProduto}>
                <div className='col-auto mt-5 mb-3'>
                    <label className='form-label'>Nome do Produto:</label>
                    <input className='form-control' type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className='col-auto mb-3'>
                    <label>Preço:</label>
                    <input className='form-control' type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
                </div>
                <div className='container text-center'>
                    <button className='w-50 btn btn-dark my-3 rounded-3 shadow-lg' type="submit">Adicionar</button>

                </div>
                <div className='container text-center'>
                <Link to={`/dashboard`} className='btn btn-info btn-sm mb-5 rounded-3 shadow-lg'>Dashboard</Link>
                </div>
            </form>
            </div>
        </div>
    );
}

export default ProdutoForm;
