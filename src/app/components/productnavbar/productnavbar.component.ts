import { Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DefaultpageComponent } from '../defaultpage/defaultpage.component';
import { ProductcardComponent } from '../products/productcard/productcard.component';
import { SelectedProductService } from '../selected-product.service';



@Component({
  selector: 'app-productnavbar',
  templateUrl: './productnavbar.component.html',
  styleUrls: ['./productnavbar.component.css']
})
export class ProductnavbarComponent implements OnInit {

  @Input()
  deviseXs: boolean =false;
  constructor(private router : Router,private selProduct : SelectedProductService) { }
 

  ngOnInit(): void {
   
  }
  moveToCoffeeMug(){
    this.router.navigate(["/mugs"]);
  }

}
