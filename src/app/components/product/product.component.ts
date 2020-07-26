import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product: Product;

  @Output() editEvent = new EventEmitter<number>();
  @Output() removeEvent = new EventEmitter<number>();

  constructor() {
  }

  onClickEdit(){
    this.editEvent.emit(this.product.id);
  }

  onClickRemove(){
    this.removeEvent.emit(this.product.id);
  }
}
