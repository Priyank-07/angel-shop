import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  @Input()
  deviseXs: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
