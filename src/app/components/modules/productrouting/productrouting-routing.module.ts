import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductnavbarComponent } from './productnavbar/productnavbar.component';
import { ProductcardComponent } from './products/productcard/productcard.component';

const routes: Routes = [
  {
    path:'product',component:ProductnavbarComponent,
    children:[
      {
        path: 'products',component:ProductcardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductroutingRoutingModule { }
