import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaultpage',
  templateUrl: './defaultpage.component.html',
  styleUrls: ['./defaultpage.component.css']
})
export class DefaultpageComponent implements OnInit {

  @Input()
  deviseXs: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
 
}
