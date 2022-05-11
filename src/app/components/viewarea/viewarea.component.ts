import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectedProductService } from '../selected-product.service';

@Component({
  selector: 'app-viewarea',
  templateUrl: './viewarea.component.html',
  styleUrls: ['./viewarea.component.css']
})
export class ViewareaComponent implements OnInit {

  constructor(private router : Router,private selproduct:SelectedProductService) { }

  @Input()
  deviseXs: boolean = false;
  ngOnInit(): void {
  }

   productArray =['mobilecovers','coffeemug','keychains','photoframes','magicmirrors','tshirts'];

   move(prod:string){
   this.selproduct.setproduct(prod);
   if(prod != "mobilecovers"){

     this.router.navigate(["/mugs"]);
   }else{
    this.router.navigate(["/mobilecovers"]);
   }
  }

  
}
