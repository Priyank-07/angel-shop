import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewarea',
  templateUrl: './viewarea.component.html',
  styleUrls: ['./viewarea.component.css']
})
export class ViewareaComponent implements OnInit {

  constructor(private router : Router) { }

  @Input()
  deviseXs: boolean = false;
  ngOnInit(): void {
  }

   move(){
    console.log("clicked");
    this.router.navigate(["/mugs"]);
  }

}
