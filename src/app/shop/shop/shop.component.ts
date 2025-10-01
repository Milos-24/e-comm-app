import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService, Product } from '../../product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  standalone: false
})
export class ShopComponent implements OnInit {
  searchQuery: string = '';
  minPrice = 0;
  maxPrice = 10000;
  minSelected = 1000;
  maxSelected = 8000;

  showSearch = false;
  selectedCategory: string = '';
  categories: string[] = [];  // could populate dynamically from products
  products: Product[] = [];
  allProducts: Product[] = [];

  batchSize = 10;
  currentIndex = 0;
  https: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.allProducts = data;
    });

    this.productService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.search-dropdown') && !target.closest('.search-button')) {
      this.showSearch = false;
    }
  }

  onSliderChange(): void {
    if (this.minSelected > this.maxSelected) {
      const temp = this.minSelected;
      this.minSelected = this.maxSelected;
      this.maxSelected = temp;
    }
  }

}
