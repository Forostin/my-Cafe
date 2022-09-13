import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { PRODUCTS } from '../product-list/data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [ProductServiceService]
})
export class CartComponent {
  products = PRODUCTS;
  product: any;
  amount: number = 0;
  order: any;
  orderProduct: any;

  constructor(public productServiceService: ProductServiceService,) {
    // this.orderProduct = productServiceService.addToCard(this.product)
    console.log(this.orderProduct)
  }
}
// export class CartComponent implements OnInit {

//   constructor(public productServiceService: ProductServiceService) {
//     this.orderProduct = productServiceService.addToCard(this.product)
//   }
// ngOnInit(){
// }
// }

