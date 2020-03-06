import { Injectable } from '@angular/core';
import {prod} from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: prod[] = [];
  constructor() {
    this.products.push(new prod('1','Man\'s Tshirt',205,'../../assets/images/NewSttuf/Man\'s Tshirt.png','new','Lorem ipsum dolor sit amet.'));
    this.products.push(new prod('2','Army Cemo',120,'../../assets/images/NewSttuf/Army Cemo.png','new','Lorem ipsum dolor sit amet.'));
    this.products.push(new prod('3','Footwear Appearl',200,'../../assets/images/NewSttuf/Footwear Appearl.png','new','Lorem ipsum dolor sit amet.'));
    this.products.push(new prod('4','Gilrs Mini Top',110,'../../assets/images/NewSttuf/Gilrs Mini Top.png','new','Lorem ipsum dolor sit amet.'));
    this.products.push(new prod('5','Ride Apperal',150,'../../assets/images/NewSttuf/Ride Apperal.png','new','Lorem ipsum dolor sit amet.'));
    this.products.push(new prod('6','Travel Pro Bag',80,'../../assets/images/NewSttuf/Travel Pro Bag.png','new','Lorem ipsum dolor sit amet.'));
    // Trending
      this.products.push(new prod('110','T-Shirt',100,'../../assets/images/TredingNow/trending1.jpg','trending','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('111','Stripe Logo T-Shirt',200,'../../assets/images/TredingNow/trending2.png','trending','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('112','Glasses',99,'../../assets/images/TredingNow/trending7.png','trending','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('113','Scarf',125,'../../assets/images/TredingNow/trending4.png','trending','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('114','Polo T-Shirt',130,'../../assets/images/TredingNow/trending5.png','trending','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('115','Purse',105,'../../assets/images/TredingNow/trending8.png','trending','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('116','Cap',99,'../../assets/images/TredingNow/cap.jpg','trending','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('117','shoes',139,'../../assets/images/TredingNow/trending3.jpg','trending','Lorem ipsum dolor sit amet.'));
// BestSeller
      this.products.push(new prod('120','Men\'s Sneakers',150,'../../assets/images/BestSeller/best1.jpg','bestSeller','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('121','Shose Maca',390,'../../assets/images/BestSeller/best7.jpg','bestSeller','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('122','Women\'s Boots',190,'../../assets/images/BestSeller/best8.jpg','bestSeller','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('123','sweater cardigan',299,'../../assets/images/BestSeller/sweater-cardigan.jpg','bestSeller','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('124','Tie',85,'../../assets/images/BestSeller/neck-tie-tie-mens-tie.jpg','bestSeller','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('125','Cap',60,'../../assets/images/BestSeller/best6.png','bestSeller','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('126','Suit',1950,'../../assets/images/BestSeller/man-wearing-black-notched-lapel-suit.jpg','bestSeller','Lorem ipsum dolor sit amet.'));
      this.products.push(new prod('127','Shoes Child',220,'../../assets/images/BestSeller/shoes-child.jpg','bestSeller','Lorem ipsum dolor sit amet.'));

  }

  getNewProduct(): prod[]{
    const newProduct:prod[] = [];
    for( let product of this.products){
      if(product.category == 'new'){
        newProduct.push(product);
      }
    }
    return newProduct;
  }
  getProductById(productId: string):prod{
    for (let product of this.products){
      if(product.ProductId == productId){
        return product;
      }
    }
    return null;
  }

  getTredingProducts():prod[]{
    const treadingProduct:prod[]=[];
    for (let product of this.products){
      if (product.category =='trending'){
        treadingProduct.push(product)
      }
    }
    return treadingProduct;
  }
  getBestSeller():prod[]{
    const bestSeller:prod[] = [];
    for (let product of this.products){
      if (product.category == 'bestSeller'){
        bestSeller.push(product)
      }
    }
    return bestSeller;
  }

  }
