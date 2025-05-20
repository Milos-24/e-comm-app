import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  standalone: false
})
export class ShopComponent {
  searchQuery: string = '';


selectedCategory: any;
categories: any;
searchTerm: any;
products = []
allProducts = [    {
  name: 'Muška majica - Crna',
  imageUrl: '/assets/product.jpg',
  price: 1990
},
{
  name: 'Ženska helanke - Sive',
  imageUrl: '/assets/product.jpg',
  price: 2990
},
{
  name: 'Duks sa kapuljačom',
  imageUrl: '/assets/product.jpg',
  price: 3490
},
{
  name: 'Ženska helanke - Sive',
  imageUrl: '/assets/product.jpg',
  price: 2990
},
{
  name: 'Duks sa kapuljačom',
  imageUrl: '/assets/product.jpg',
  price: 3490
},
{
  name: 'Ženska helanke - Sive',
  imageUrl: '/assets/product.jpg',
  price: 2990
},
{
  name: 'Duks sa kapuljačom',
  imageUrl: '/assets/product.jpg',
  price: 3490
},
{
  name: 'Ženska helanke - Sive',
  imageUrl: '/assets/product.jpg',
  price: 2990
},
{
  name: 'Duks sa kapuljačom',
  imageUrl: '/assets/product.jpg',
  price: 3490
},
{
  name: 'Ženska helanke - Sive',
  imageUrl: '/assets/product.jpg',
  price: 2990
},
{
  name: 'Duks sa kapuljačom',
  imageUrl: '/assets/product.jpg',
  price: 3490
},
{
  name: 'Ženska helanke - Sive',
  imageUrl: '/assets/product.jpg',
  price: 2990
},
{
  name: 'Duks sa kapuljačom',
  imageUrl: '/assets/product.jpg',
  price: 3490
},
{
  name: 'Ženska helanke - Sive',
  imageUrl: '/assets/product.jpg',
  price: 2990
},
{
  name: 'Duks sa kapuljačom',
  imageUrl: '/assets/product.jpg',
  price: 3490
}];
batchSize = 10;
currentIndex = 0;

ngOnInit() {
  this.loadMoreProducts();
}

onScroll(event: Event): void {
  const target = event.target as HTMLElement;

  if (target.scrollTop + target.clientHeight >= target.scrollHeight - 200) {
    this.loadMoreProducts();
  }
}

loadMoreProducts(): void {
  const nextBatch = this.allProducts.slice(this.currentIndex, this.currentIndex + this.batchSize);
  this.products.push();
  this.currentIndex += this.batchSize;
}


}
