import { Component, OnInit } from '@angular/core';
import {prod} from '../models/products.model';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

   treadingProducts:prod[] = [];
  constructor(private ProductServ: ProductsService) {
    this.treadingProducts = this.ProductServ.getTredingProducts();
    console.log(this.treadingProducts);
  }

  ngOnInit() {
  }

}
