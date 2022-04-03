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
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactusComponent,
    NavbarComponent,
    DefaultpageComponent,
    ProductnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
