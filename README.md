# Produto API (CRUD with Spring and React)

Este projeto é um sistema de gerenciamento de produtos desenvolvido com Spring Boot no backend e React no frontend. O sistema permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) em produtos eletrônicos e de jogos, com uma interface de usuário interativa e responsiva.

<div align="center">
    <h3 align="center">Tecnologias utilizada</h3>
        <img width="50" src="https://user-images.githubusercontent.com/25181517/183891303-41f257f8-6b3d-487c-aa56-c497b880d0fb.png" alt="Spring Boot" title="Spring Boot"/>
        <img width="50" src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" alt="Swagger" title="Swagger"/>
        <img width="50" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="React" title="React"/>]
        <img width="50" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="Bootstrap" title="Bootstrap"/>  
</div>

### Documentação com Swagger

A documentação da API é feita utilizando o Swagger 3. O Swagger é uma ferramenta que permite a documentação e a visualização de APIs RESTful de forma interativa. Abaixo, apresentamos uma visualização gráfica da documentação dos endpoints, acessível por meio da interface do Swagger.

<div align="center">
    <img src="https://github.com/Ki3lMigu3l/Spring-React-Produto-CRUD/blob/main/product-frontend/readme/Documenta%C3%A7%C3%A3o%20com%20Swagger.png" alt="Interface do Swagger" width="650"/>
</div>
<br>

### Produto Controller

Utilizando as anotações @Operation e @ApiResponse, conseguimos adicionar mais clareza às descrições dos métodos no controlador, melhorando a documentação da API e facilitando a compreensão das funcionalidades disponíveis.

<div align="center">
   <img src="https://github.com/Ki3lMigu3l/Spring-React-Produto-CRUD/blob/main/product-frontend/readme/carbon-swaggeroperation.png" alt="Operation e APIResponse: Swagger 3" width="650"/>
</div>

<br>

### Frontend com React
O React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário, desenvolvida pelo Facebook. 

<br>

- **Tela para adicionar Produtos**: Uma interface que permite ao usuário inserir um novo produto no banco de dados.
<div align="center">
   <img src="https://github.com/Ki3lMigu3l/Spring-React-Produto-CRUD/blob/main/product-frontend/readme/adicionando-produto.png" alt="Frontend: adicionar produto" width="650"/>
</div>

- **Dashboard em Tabela**: Uma visualização clara e organizada dos produtos cadastrados, exibindo informações como o nome e preço.
<div align="center">
    <img src="https://github.com/Ki3lMigu3l/Spring-React-Produto-CRUD/blob/main/product-frontend/readme/dashboard-produtos.png" alt="Frontend: dashboard" width="650"/>
</div>

- **Editar Produtos**: É possível realizar ações como atualziar e deletar algum produto da base de dados.
<div align="center">
    <img src="https://github.com/Ki3lMigu3l/Spring-React-Produto-CRUD/blob/main/product-frontend/readme/salvando-produto.png" alt="Frontend: operações update e delete" width="650"/>
</div>
  
 
### Conclusão
Este projeto para gerenciamento de Produtos desenvolvido em **Spring Boot** e **React** proporcionou uma experiência valiosa na construção de aplicações web. A integração do backend do Spring com a interface interativa do React permitiu criar uma aplicação completa para gerenciar produtos. Implementamos funcionalidades essenciais como criação, leitura, atualização e exclusão de dados, enquanto a documentação da API com Swagger facilitou a compreensão dos endpoints disponíveis.
