import { Component, OnInit } from '@angular/core';
import {FeaturesService} from '../services/features.service';
import {Fet} from '../models/featuers.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})

export class FeaturesComponent implements OnInit {
    features: Fet[]= [];

  constructor(private FeatuureServ: FeaturesService) {
    this.features = this.FeatuureServ.getFeatures();
    console.log(this.features);
  }

  ngOnInit() {
  }

}
