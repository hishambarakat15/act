import { Injectable } from '@angular/core';
import {latest} from '../models/latestNews.model';

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {

  private latestNews: latest[]= [];
  constructor() {
    this.latestNews.push(new latest('1',100,20,'../../assets/images/latestNews/cotton-clothes.jpg','You Like Cotton Clothes?','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.'))
    this.latestNews.push(new latest('2',50,15,'../../assets/images/latestNews/leather-bag.jpg','Best Leather Bags','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.'))
    this.latestNews.push(new latest('3',15,6,'../../assets/images/latestNews/sport-clothes.jpg','Awesome Sport Clothes','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperioresLorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, asperiores.'))
  }

  getLatestNews():latest[]{
    return this.latestNews;
  }
  getNewsById(id:string):latest{
    for (let news of this.latestNews){
      if(news.id == id){
        return news;
      }
    }
    return null;
  }

}
