import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-defaultpage',
  templateUrl: './defaultpage.component.html',
  styleUrls: ['./defaultpage.component.css']
})
export class DefaultpageComponent implements OnInit {

  @Input()
  deviseXs: boolean = false;
  
  showHomePage : boolean = true;
  someval : boolean = true;
  ngOnInit(): void {
   
    console.log(this.showHomePage);
  }
  constructor(private router : Router) { }


 
  // move(){
  //   console.log("clicked");
  //   this.showHomePage =false;
  //   this.router.navigate(["/mugs"]);
  // }
 
}
