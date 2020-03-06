import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CartService} from '../services/cart.service';
import {cartItem} from '../models/cartItem,Model';
import {ProductsService} from '../services/products.service';
declare var $;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

     cartItems: cartItem[] = [];
  constructor(private cartServ:CartService, public productServ:ProductsService) {
      this.cartItems = this.cartServ.getCartItem();
      this.cartServ.itemEVE.subscribe(()=>{
          this.cartItems = this.cartServ.getCartItem();

      })
  }

  ngOnInit() {
      $(".search-btn").click(function () {
          $('.search-box').toggle();
      });
      //Handel NavBar When Scroll
      window.addEventListener("scroll", () => {
          if(window.scrollY >= 70) {
              $(".navbar").css({
                  width: '100%',
                  left: 0
              });
          } else {
              $(".navbar").css({
                  width: '90%',
                  left: '5%'
              });
          }
      })
  }

  ngAfterViewInit(){



  }

}
