import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'editprodform',
  templateUrl: './editprodform.component.html',
  styleUrls: ['./editprodform.component.css']
})
export class EditprodformComponent implements OnInit {
  product: Product = null;
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() price: number;
  @Input() description: string = '';
  @Output() editEvent: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancelEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor(product?: Product) { 
    if(product != null){
      this.product = product;
    }
  }

  onClickEdit(){
    this.product = new Product(0, this.name, this.category, this.price , this.description);
    console.log(this.product);
    this.editEvent.emit(this.product);
  }

  onClickCancel(){
    console.log('Cancel');
    this.cancelEvent.emit();
  }

  ngOnInit(): void { 
  }
}
