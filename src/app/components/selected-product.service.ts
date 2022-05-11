import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {

  constructor(private httpClient :HttpClient) { 

  }
 prodt? :string;
  setproduct(vals :string){
    this.prodt=vals;
    console.log(vals);
  }

  getproduct(){
    return this.prodt;
  }

  // getListedProducts(somename:string){
  //  return this.httpClient.get("assets/productsDetails/coffeemug.json").subscribe(data =>{
  //     this.products=data;
  //   })
    
  //}

}
