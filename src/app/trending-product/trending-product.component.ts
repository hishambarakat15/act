import {Component, Input, OnInit} from '@angular/core';
import {prod} from '../models/products.model';
import {CartService} from '../services/cart.service';
import {cartItem} from '../models/cartItem,Model';

@Component({
  selector: 'app-trending-product',
  templateUrl: './trending-product.component.html',
  styleUrls: ['./trending-product.component.css']
})

export class TrendingProductComponent implements OnInit {

  @Input() currentProduct:prod = null;
    private cartItems:cartItem[] =[];

    constructor(private cartServ: CartService) { }

  ngOnInit() {
  }

    addToCartClick() {
        let amount = prompt('Enter The Number Of Required items');
        if (amount){
            let intAmount = parseFloat(amount);
            this.cartServ.addItemsToCart(this.currentProduct.ProductId,intAmount);
            this.cartItems = this.cartServ.getCartItem();
            console.log(this.cartItems);
        }
    }
}
