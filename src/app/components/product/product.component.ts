import { Component, Input } from '@angular/core';
import { Product } from './../../models/producto.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: []
  };
}
