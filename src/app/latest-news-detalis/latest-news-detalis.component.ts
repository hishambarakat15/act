import {Component, Input, OnInit} from '@angular/core';
import {latest} from '../models/latestNews.model';
import {LatestNewsService} from '../services/latest-news.service';

@Component({
  selector: 'app-latest-news-detalis',
  templateUrl: './latest-news-detalis.component.html',
  styleUrls: ['./latest-news-detalis.component.css']
})

export class LatestNewsDetalisComponent implements OnInit {
@Input() currentNews: latest = null;
 data:latest ;
  constructor(private latestNewsServ:LatestNewsService ) {}

  ngOnInit() {
  }


    onClickViewer(id: string) {
        this.currentNews.view++;
        this.data = this.latestNewsServ.getNewsById(id);
        console.log(this.data);
    }


}
