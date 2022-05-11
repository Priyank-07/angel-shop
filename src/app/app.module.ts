import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultpageComponent } from './components/defaultpage/defaultpage.component';
import { ProductnavbarComponent } from './components/productnavbar/productnavbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProductcardComponent } from './components/products/productcard/productcard.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { ViewareaComponent } from './components/viewarea/viewarea.component'
import {MatBadgeModule} from '@angular/material/badge';
import { FooterareaComponent } from './components/footerarea/footerarea.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectedProductService } from './components/selected-product.service';
import { MobilecardComponent } from './components/mobilecard/mobilecard.component';
import {MatExpansionModule } from '@angular/material/expansion'
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactusComponent,
    NavbarComponent,
    DefaultpageComponent,
    ProductnavbarComponent,
    ProductcardComponent,
    ViewareaComponent,
    FooterareaComponent,
    MobilecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatGridListModule,
    MatExpansionModule,
    RouterModule,FlexLayoutModule,MatIconModule,FontAwesomeModule
    
    
    

  ],
  providers: [SelectedProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
