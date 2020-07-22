import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import{ FormsModule } from '@angular/forms'

@Component({
  selector: 'productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  @Input() @Output() product: Product;

  constructor(product: Product) { 
    this.product = product;
  }

  ngOnInit(): void { 
  }

}
