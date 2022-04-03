import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DefaultpageComponent } from './components/defaultpage/defaultpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductcardComponent } from './components/products/productcard/productcard.component';

const routes: Routes = [
  {path : 'contactus',component :ContactusComponent},
  {path :'home',component:DefaultpageComponent},
  {path :'mugs',component:ProductcardComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
