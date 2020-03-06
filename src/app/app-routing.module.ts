import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyCartComponent} from './my-cart/my-cart.component';
import {HeaderComponent} from './header/header.component';
import {FeaturesComponent} from './features/features.component';
import {NewStuffComponent} from './new-stuff/new-stuff.component';
import {SummerSectionComponent} from './summer-section/summer-section.component';
import {TrendingComponent} from './trending/trending.component';
import {SubscribeComponent} from './subscribe/subscribe.component';
import {AboutComponent} from './about/about.component';
import {BestSellerComponent} from './best-seller/best-seller.component';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';


const routes: Routes = [
    {path:"" ,component: ContentComponent},
    {path:"login" ,component: LoginComponent},
    {path:"register" ,component: RegisterComponent},
    { path:"myCart" , component: MyCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
