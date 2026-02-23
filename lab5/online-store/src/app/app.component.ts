import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { Category } from './category.model';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  categories: Category[] = [
    { id: 1, name: 'Facial Care'},
    { id: 2, name: 'Cosmetics'},
    { id: 3, name:  'Perfumery'},
    { id: 4, name: 'Hair Care' }
    ];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }
}
