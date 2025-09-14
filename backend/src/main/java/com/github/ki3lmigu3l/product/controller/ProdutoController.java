package com.github.ki3lmigu3l.product.controller;

import com.github.ki3lmigu3l.product.model.Produto;
import com.github.ki3lmigu3l.product.service.ProdutoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin("*")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @Operation(summary = "Listar todos os produtos",
            description = "Retorna uma lista de todos os produtos cadastrados.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Lista de produtos retornada com sucesso."),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor.")
    })
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Produto> listarProdutos() {
        return produtoService.listarProdutos();
    }

    @Operation(summary = "Buscar produto pelo ID",
            description = "Retorna os detalhes de um produto específico, identificado pelo seu ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Produto encontrado."),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor.")
    })
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Produto buscarProdutoPeloId (@PathVariable Long id) {
        return produtoService.buscarProdutoPorId(id);
    }


    @Operation(summary = "Salvar um novo produto",
            description = "Cadastra um novo produto no sistema.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Produto cadastrado com sucesso."),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor.")
    })
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Produto salvarProduto (@RequestBody Produto produto) {
        return produtoService.salvarProduto(produto);
    }

    @Operation(summary = "Atualizar um produto",
            description = "Atualiza os dados de um produto existente, identificado pelo seu ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Produto atualizado com sucesso."),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor.")
    })
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Produto atualizarProduto (@PathVariable Long id, @RequestBody Produto produtoAtualizado) {
        return produtoService.atualizarProduto(id, produtoAtualizado);
    }

    @Operation(summary = "Deletar um produto",
            description = "Remove um produto do sistema, identificado pelo seu ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Produto deletado com sucesso."),
            @ApiResponse(responseCode = "500", description = "Erro interno do servidor.")
    })
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarProduto(@PathVariable Long id) {
        produtoService.deletarProduto(id);
    }
}
