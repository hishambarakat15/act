import { Injectable } from '@angular/core';
import {testemonials} from '../models/testemoials.model';

@Injectable({
  providedIn: 'root'
})
export class TestemonialsService {

  private  testemonials:testemonials[] = [];
  constructor() {
    this.testemonials.push(new testemonials('fa fa-comments fa-3x','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi praesentium optio odit quia rem cumque.','- Hisham Barakat -'))
    this.testemonials.push(new testemonials('fa fa-comments fa-3x','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi praesentium optio odit quia rem cumque.','- Saleh Hassan -'))
    this.testemonials.push(new testemonials('fa fa-comments fa-3x','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi praesentium optio odit quia rem cumque.','- Hadeer Mohamed -'))
  }

  getTestemonials():testemonials[]{
    return this.testemonials;
  }
}
