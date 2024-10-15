import React from 'react';
import ProdutoForm from './components/ProdutoForm';
import ProdutoList from './components/ProdutoList';
import ProdutoUpdate from './components/ProdutoUpdate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 className='text-center mt-5'>Produtos</h1>
        <Routes>
          <Route path="/" element={<ProdutoForm />} />
          <Route path="/dashboard" element={<ProdutoList/>} />
          <Route path="/editar/:id" element={<ProdutoUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
