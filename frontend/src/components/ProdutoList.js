import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProdutoList() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/produtos')
            .then(response => setProdutos(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
                            <div className='container text-center'>
                    <Link to={`/`} className='btn btn-dark mt-5 rounded-3 shadow-lg'>Adicionar Produto</Link>
                </div>
            <div className='container my-5'>
                <table className='table table-hover tabled-striped table-bordered'>
                    <thead className='table-dark'>
                        <tr>
                            <th scope='col' className='p-3'>Nome do Produto</th>
                            <th scope='col' className='p-3'>Preço</th>
                            <th scope='col' className='p-3'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>R$ {produto.preco}</td>
                                <td className='text-center'><Link to={`/editar/${produto.id}`} className='container w-25 text-center rounded-sm btn btn-warning btn-sm'>Editar</Link></td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default ProdutoList;
