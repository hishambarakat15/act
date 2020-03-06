import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {prod} from '../models/products.model';
declare var $:any;
@Component({
  selector: 'app-new-stuff',
  templateUrl: './new-stuff.component.html',
  styleUrls: ['./new-stuff.component.css']
})
export class NewStuffComponent implements OnInit, AfterViewInit {

  newProduct: prod[] = [];
  constructor(private productServ: ProductsService) {
    this.newProduct = this.productServ.getNewProduct();
    console.log(this.newProduct);
  }

  ngOnInit() {
      $(document).ready(function(){
          $('.owl-carousel').owlCarousel(
              {
                  autoplay:true,
                  autoplayTimeout:2000,
                  autoplayHoverPause:true,
                  responsive:{
                      0:{
                          items:1
                      },
                      600:{
                          items:3
                      },
                      960:{
                          items:3
                      },

                  },
                  loop:true,
              }
          );
      });
  }
  ngAfterViewInit(){



  }

}
