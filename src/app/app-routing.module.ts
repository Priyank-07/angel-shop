import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DefaultpageComponent } from './components/defaultpage/defaultpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MobilecardComponent } from './components/mobilecard/mobilecard.component';
import { ProductcardComponent } from './components/products/productcard/productcard.component';

const routes: Routes = [
  {path : 'contactus',component :ContactusComponent},
  {path :'home',component:DefaultpageComponent},
  // {path : ' ',redirectTo:'DefaultpageComponent',pathMatch:'full'},
  {path :'mugs',component:ProductcardComponent},
  {path :'angel-shop',component:DefaultpageComponent},
  {path :'mobilecovers',component :MobilecardComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
