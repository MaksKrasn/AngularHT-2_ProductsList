import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  @Input() product: Product = null;
  @Output() saveEvent: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(product?: Product) { 
    if(product != null){
      this.product = product;
    }
  }

  onClickSave(product: Product){
    console.log(product);
    this.product = product;
    this.saveEvent.emit(product);
  }

  ngOnInit(): void { 
  }

}
