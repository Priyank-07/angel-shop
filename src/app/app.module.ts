import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DefaultpageComponent } from './components/defaultpage/defaultpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactusComponent,
    NavbarComponent,
    DefaultpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
