import { Component, OnInit } from '@angular/core';
import {cartItem} from '../models/cartItem,Model';
import {CartService} from '../services/cart.service';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {

   cartItems: cartItem[] =[];
  constructor(private cartServ: CartService ,public productServ: ProductsService) {


    this.cartItems = this.cartServ.getCartItem();
  }
  clcPrice(price:number,amount:number){
    return price*amount;
  }
  clcTotalPrice(){
    let total = 0;
    for (const item of this.cartItems) {
      const product = this.productServ.getProductById(item.productId);
      total += this.clcPrice(product.price,item.amount)
    }
    return total;
  }

  ngOnInit() {
  }

    onRemoveItemClick(productId: string) {
    const isConfirmed = confirm("Are You Sure ?!");
    if (isConfirmed){
        this.cartServ.removeCartItem(productId);

    }
    }
}
