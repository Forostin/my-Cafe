import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './data';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(public productServiceService: ProductServiceService) {
  }
  products = PRODUCTS;
  product?: Product;

  // getProducts(): void {
  //   this.product = this.productServiceService.getProducts();
  // }

  ngOnInit(): void {
    // this.getProducts();
  }
}





