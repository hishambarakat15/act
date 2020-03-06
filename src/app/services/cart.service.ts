import {EventEmitter, Injectable} from '@angular/core';
import {cartItem} from '../models/cartItem,Model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems:cartItem[] = [];
  private idCounter:number ;
  public itemEVE = new EventEmitter<any>();
  constructor() {
    this.idCounter = 1000;
  }

  getCartItem():cartItem[]{
    return this.cartItems;
  }

  addItemsToCart(productId:string, amount:number){
    let isFound = false;
    for (let cartitem of this.cartItems){
      if (cartitem.productId == productId){
        cartitem.amount += amount;
        isFound = true;
        break;
      }
    }
    if(!isFound){
      this.cartItems.push(new cartItem('product - ' + this.idCounter++ ,productId,amount))
    }
    this.itemEVE.emit();
  }
  removeCartItem(id: string){
    let index= -1;
    for( const cartitem of this.cartItems){
      index++;
      if (cartitem.productId == id){
        break;
      }
    }
    if (index>=0){
      this.cartItems.splice(index,1);
    }
  }
}
