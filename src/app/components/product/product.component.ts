import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() editEvent = new EventEmitter<number>();
  @Output() removeEvent = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickEdit(){
    this.editEvent.emit(this.product.id);
  }

  onClickRemove(){
    this.removeEvent.emit(this.product.id);
  }
}
