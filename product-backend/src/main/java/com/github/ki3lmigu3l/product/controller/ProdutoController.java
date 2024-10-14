package com.github.ki3lmigu3l.product.controller;

import com.github.ki3lmigu3l.product.model.Produto;
import com.github.ki3lmigu3l.product.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> listarProdutos() {
        return produtoService.listarProdutos();
    }

    @GetMapping("/{id}")
    public Produto buscarProdutoPeloId (@PathVariable Long id) {
        return produtoService.buscarProdutoPorId(id);
    }

    @PostMapping
    public Produto salvarProduto (@RequestBody Produto produto) {
        return produtoService.salvarProduto(produto);
    }

    @PutMapping("/{id}")
    public Produto atualizarProduto (@PathVariable Long id, @RequestBody Produto produtoAtualizado) {
        return produtoService.atualizarProduto(id, produtoAtualizado);
    }

    @DeleteMapping("/{id}")
    public void deletarProduto(@PathVariable Long id) {
        produtoService.deletarProduto(id);
    }
}
