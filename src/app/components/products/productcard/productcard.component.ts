import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectedProductService } from '../../selected-product.service';


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

  constructor(private httpClient:HttpClient,private selProduct : SelectedProductService) { }
   products :any =[];
  ngOnInit(): void {
    this.showMugs()
  }
  showMugs(){
   console.log( this.selProduct.getproduct());
    this.httpClient.get("assets/productsDetails/"+this.selProduct.getproduct()+".json").subscribe(data =>{
      this.products=data;
    })
  }
  

}
