import { Injectable } from '@angular/core';
import { PRODUCTS } from './product-list/data';
import { Product } from './product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService {
  constructor(private _snackBar: MatSnackBar,) { }

  products = PRODUCTS;
  // product: any;
  product?: Product;
  amount: number = 0;
  order: any = [];
  orderProduct: any = [];
  resultSum: number = 0

  addToCard(product: Product) {
    this.order.push(product.price)
    this.resultSum = this.order.reduce(function (sum: number, current: number) {
      return sum + current
    });

    this.orderProduct.push(product)
    console.log(this.orderProduct)

    console.log(this.order)
    this._snackBar.open(`Сумма Вашего заказа: ${this.resultSum}`)

    this.amount++
    console.log(this.amount)
  }

  cancel(product: Product) {
    const index: number = this.order.indexOf(product.price);
    if (index !== -1) {
      this.order.splice(index, 1);
      if (this.order.length == 0) {
        this._snackBar.open(`Вы полностью отменили заказ ! Сделайте, пожалуйста, новый.`)
        return alert("Заказ отменен")
      }
      console.log(this.order)
      let resultSum_2 = this.order.reduce(function (sum: number, current: number) {
        return sum + current
      });
      this._snackBar.open(`Вы отменили " ${product.title} ". Сумма заказа стала ${resultSum_2} грн`)
    }
  }
  cancelOrder(order: any) {
    order = [];
    this._snackBar.open(`Вы полностью отменили заказ ! Сделайте, пожалуйста, новый.`)
    return alert("Заказ отменен")
  }
  // getProducts(): Product[] {
  //   return PRODUCTS
  // }
}



