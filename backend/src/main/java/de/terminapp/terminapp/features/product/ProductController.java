package de.terminapp.terminapp.features.product;

import de.terminapp.terminapp.features.product.models.Product;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "api/v1/products")
public class ProductController {
    private final ProductService productService;

    @GetMapping
    ResponseEntity<List<Product>> getAllProducts() {
        log.info("Request for all products");
        List<Product> result = productService.getAllProducts();
        return ResponseEntity.ok().body(result);
    }

    @PostMapping
    ResponseEntity<Product> createProduct(@Validated @RequestBody Product product) {
        log.info("Request to create a product: {}", product);
        Product result = productService.createProduct(product);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("{id}")
    ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        log.info("Request to delete product: {}", id);
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
}
