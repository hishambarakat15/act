import {Component, Input, OnInit} from '@angular/core';
import {prod} from '../models/products.model';
import {CartService} from '../services/cart.service';
import {cartItem} from '../models/cartItem,Model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  @Input() currentProduct :prod = null;
  private cartItems:cartItem[] =[];
  constructor(private cartServ :CartService) {
  }

  ngOnInit() {
  }

    onAddToCartClick() {
        let amount = prompt("Enter The Number Of Required items ?");
        if (amount){
            let intAmount = parseFloat(amount);
            console.log(amount);
            console.log(intAmount);
            this.cartServ.addItemsToCart(this.currentProduct.ProductId,intAmount);
            this.cartItems = this.cartServ.getCartItem();
            console.log(this.cartItems);
        }

    }
}
