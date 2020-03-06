import { Component, OnInit } from '@angular/core';
import {latest} from '../models/latestNews.model';
import {LatestNewsService} from '../services/latest-news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

   latestNews: latest [] = [];
  constructor(private latestNewsServ: LatestNewsService) {
    this.latestNews = this.latestNewsServ.getLatestNews();
  }

  ngOnInit() {
  }

}
