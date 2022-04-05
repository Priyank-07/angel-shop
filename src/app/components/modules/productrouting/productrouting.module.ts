import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductroutingRoutingModule } from './productrouting-routing.module';
import { ProductcardComponent } from './products/productcard/productcard.component';
import { ProductnavbarComponent } from './productnavbar/productnavbar.component';


@NgModule({
  declarations: [
    ProductcardComponent,
    ProductnavbarComponent
  ],
  imports: [
    CommonModule,
    ProductroutingRoutingModule
  ]
})
export class ProductroutingModule { }
