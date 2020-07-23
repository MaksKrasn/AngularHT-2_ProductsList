import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'editprodform',
  templateUrl: './editprodform.component.html',
  styleUrls: ['./editprodform.component.css']
})
export class EditprodformComponent implements OnInit {
  @Input() product: Product;
  @Input() id: number;
  @Input() name: string = '';
  @Input() category: string = '';
  @Input() price: number;
  @Input() description: string = '';
  @Output() editEvent: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancelEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor() {
    //this.id = this.product.id;
    this.name = this.product.name;
    this.category = this.product.category;
    this.price = this.product.price;
    this.description = this.product.description;
    console.log('editform' + this.name); 
  }

  onClickEdit(){
    this.product = new Product(this.id, this.name, this.category, this.price , this.description);
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
