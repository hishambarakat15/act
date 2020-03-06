import { Component, OnInit } from '@angular/core';
import {prod} from '../models/products.model';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit {

   bestSellerProducts: prod[] = [];
  constructor(private productServ: ProductsService) {
    this.bestSellerProducts = this.productServ.getBestSeller();
  }

  ngOnInit() {
  }

}
