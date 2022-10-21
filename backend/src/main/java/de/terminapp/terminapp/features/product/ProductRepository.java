package de.terminapp.terminapp.features.product;

import de.terminapp.terminapp.features.product.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}