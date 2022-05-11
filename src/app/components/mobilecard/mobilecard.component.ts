import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectedProductService } from '../selected-product.service';

@Component({
  selector: 'app-mobilecard',
  templateUrl: './mobilecard.component.html',
  styleUrls: ['./mobilecard.component.css']
})
export class MobilecardComponent implements OnInit {

  mobiles :any =[];
  panelOpenState = false;
  constructor(private httpClient:HttpClient,private selProduct : SelectedProductService) { }

  ngOnInit(): void {
    this.httpClient.get("assets/productsDetails/"+this.selProduct.getproduct()+".json").subscribe(data =>{
      this.mobiles=data;
    })
  }

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

