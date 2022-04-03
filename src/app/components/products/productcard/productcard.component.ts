import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface CoffeMug{
  id:Number;
  name:String;
  price:Number;
}
@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }
   products :any =[];
  ngOnInit(): void {
    this.httpClient.get("assets/productsDetails/coffeemug.json").subscribe(data =>{
      this.products=data;
    })
  }
  

}
