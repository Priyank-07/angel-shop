import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  deviseXs: boolean =false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  moveToContact(val:boolean){
    console.log(val)
    if(val){

      this.router.navigate(["/contactus"]);
    }
  }
  moveToHome(val:boolean){
    console.log(val)
    if(val){

      this.router.navigate(["/home"]);
    }
  }
}
