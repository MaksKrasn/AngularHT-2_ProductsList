import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';
  isProductsHidden = false;
  products: Product[] = [];

  constructor(){
    this.products.push(new Product(1, 'Product1', 'Category1', 1000, 'Description1'));
    this.products.push(new Product(2, 'Product2', 'Category2', 500, 'Description2'));
    this.products.push(new Product(3, 'Product3', 'Category3', 3000, 'Description3'));
    this.products.push(new Product(4, 'Product4', 'Category4', 200, 'Description4'));
  }

  removeProduct(id: number) {
    console.log('Remove: ' + id);
    let idx  = this.products.findIndex(prod => prod.id == id);
    this.products.splice(idx, 1);
  }

  editProduct(id: number) {
    console.log('Edit: ' + id);
  }


}
