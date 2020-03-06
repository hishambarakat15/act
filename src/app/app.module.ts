import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import {FeaturesService} from './services/features.service';
import { NewStuffComponent } from './new-stuff/new-stuff.component';
import {ProductsService} from './services/products.service';
import {CarouselModule} from 'ngx-owl-carousel-o';
import { NewProductComponent } from './new-product/new-product.component';
import { SummerSectionComponent } from './summer-section/summer-section.component';
import { TrendingComponent } from './trending/trending.component';
import { TrendingProductComponent } from './trending-product/trending-product.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { AboutComponent } from './about/about.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BestSellerProductComponent } from './best-seller-product/best-seller-product.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { LatestNewsDetalisComponent } from './latest-news-detalis/latest-news-detalis.component';
import { FooterComponent } from './footer/footer.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ContentComponent } from './content/content.component';
import { SliderComponent } from './slider/slider.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    NewStuffComponent,
    NewProductComponent,
    SummerSectionComponent,
    TrendingComponent,
    TrendingProductComponent,
    SubscribeComponent,
    AboutComponent,
    BestSellerComponent,
    BestSellerProductComponent,
    LatestNewsComponent,
    LatestNewsDetalisComponent,
    FooterComponent,
    MyCartComponent,
    ContentComponent,
    SliderComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,

  ],
  providers: [
      FeaturesService,
      ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
