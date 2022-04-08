import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footerarea',
  templateUrl: './footerarea.component.html',
  styleUrls: ['./footerarea.component.css']
})
export class FooterareaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onFBClick() {
    window.location.href = "https://www.facebook.com/angel_printing_house-105220155200674/";
  }
  onInstaClick(){
    window.location.href = "https://www.instagram.com/angel_printing_house/";
  }

  onWhatsAppClick(){
    window.location.href  ="https://api.whatsapp.com/send?phone=917488003670&text=Welcome%20to%20Angel%20printing%20house";
  }
}
