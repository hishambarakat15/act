import { Component, OnInit } from '@angular/core';
import {testemonials} from '../models/testemoials.model';
import {TestemonialsService} from '../services/testemonials.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private test: testemonials[]= [];
  constructor(private testServ: TestemonialsService) {
    this.test = this.testServ.getTestemonials();

  }

  ngOnInit() {
  }

}
