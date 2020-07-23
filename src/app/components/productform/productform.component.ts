import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  product: Product = null;
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() price: number;
  @Input() description: string = '';
  @Output() saveEvent: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancelEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor(/*product?: Product*/) { 
    /*if(product != null){
      this.product = product;
    }*/
  }

  onClickSave(){
    this.product = new Product(0, this.name, this.category, this.price , this.description);
    //console.log(this.product);
    this.saveEvent.emit(this.product);
  }

  onClickCancel(){
    this.cancelEvent.emit();
  }

  ngOnInit(): void { 
  }

}
