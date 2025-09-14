package com.github.ki3lmigu3l.product.repository;

import com.github.ki3lmigu3l.product.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
