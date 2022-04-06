import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @Input()
  deviseXs: boolean = false;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  
  }

}
