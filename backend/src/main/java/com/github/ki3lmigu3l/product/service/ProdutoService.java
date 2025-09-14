package com.github.ki3lmigu3l.product.service;

import com.github.ki3lmigu3l.product.model.Produto;
import com.github.ki3lmigu3l.product.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> listarProdutos() {
        return produtoRepository.findAll();
    }

    public Produto buscarProdutoPorId(Long id) {
        return produtoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Produto não encontrado!"));
    }

    public Produto salvarProduto(Produto produto) {
        return produtoRepository.save(produto);
    }

    public Produto atualizarProduto (Long id, Produto produtoAtualizado) {
        Produto produto = buscarProdutoPorId(id);
        produto.setNome(produtoAtualizado.getNome());
        produto.setPreco(produtoAtualizado.getPreco());
        return produtoRepository.save(produto);
    }

    public void deletarProduto (Long id) {
        produtoRepository.deleteById(id);
    }
}
