import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-list';

  product: Product= new Product(1,'Pdoduct1','Bike Accsosuares',1000,'Bike lights');

  removeProduct(id: number) {
    console.log('Remove: ' + id);
  }

  editProduct(id: number) {
    console.log('Edit: ' + id);
  }


}
