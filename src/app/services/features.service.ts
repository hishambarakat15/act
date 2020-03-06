import { Injectable } from '@angular/core';
import {Fet} from '../models/featuers.model';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  private feat:Fet[] = [];
  constructor() {
    this.feat.push(new Fet("fa fa-car fa-lg","Fast Delivery","Lorem ipsum dolor sit, amet consectetur adipisicing elit."));
    this.feat.push(new Fet("fa fa-credit-card ","Secure Payment","Lorem ipsum dolor sit, amet consectetur adipisicing elit."));
    this.feat.push(new Fet("fa fa-question fa-lg","24/7 Support","Lorem ipsum dolor sit, amet consectetur adipisicing elit."));
    this.feat.push(new Fet("fa fa-repeat fa-lg","Return Policy","Lorem ipsum dolor sit, amet consectetur adipisicing elit."));


      // <i class="fas fa-money-check-edit-alt"></i>
  }
    getFeatures():Fet[]{
    return this.feat
    }
}

