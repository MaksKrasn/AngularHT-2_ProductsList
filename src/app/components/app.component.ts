import { Component } from '@angular/core';
import { Product } from '../models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';
  isProductsVisible = true;
  isAddFormVisible = false;
  isEditFormVisible = false;
  products: Product[] = [];
  editIdx: number;

  product: Product;

  constructor(){
    this.products.push(new Product(1, 'Product1', 'Category1', 1000, 'Description1'));
    this.products.push(new Product(2, 'Product2', 'Category2', 500, 'Description2'));
    this.products.push(new Product(3, 'Product3', 'Category3', 3000, 'Description3'));
    this.products.push(new Product(4, 'Product4', 'Category4', 200, 'Description4'));
  }

  removeProduct(id: number) {
    console.log('Remove: ' + id);
    alert('Удалить продукт?');
    let idx  = this.products.findIndex(prod => prod.id == id);
    this.products.splice(idx, 1);
  }

  addFormOpen(){
    this.isAddFormVisible = true;
    this.isProductsVisible = false;
  }

  editFormOpen(id: number){
    console.log('editformevent' + id);
    this.editIdx  = this.products.findIndex(prod => prod.id == id);
    this.product = this.products[this.editIdx];
    console.log(this.product);
    this.isEditFormVisible = true;
    this.isProductsVisible = false;
  }

  addProduct(product: Product){
    
    if(this.products.length > 0){
      let lastProduct = this.products[this.products.length - 1];
      product.id = lastProduct.id + 1;
    }
    this.products.push(product);
    console.log(product);
    this.isProductsVisible = true;
    this.isAddFormVisible = false;
  }

  editProduct(product: Product) {
    console.log('main edit');
    console.log(product);
    this.products[this.editIdx] = product;
    this.isProductsVisible = true;
    this.isEditFormVisible = false;
  }

  goToMainScreen(){
    this.isProductsVisible = true;
    this.isAddFormVisible = false;
    this.isEditFormVisible = false;
  }

}
