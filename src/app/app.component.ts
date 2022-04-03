import { Component, OnDestroy, OnInit } from '@angular/core';
import {MediaChange,MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'angel-shop';
  mediaSub: Subscription = new Subscription;
  deviseXs: boolean = false;

  constructor(private mediaObserver: MediaObserver){

  }
  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        this.deviseXs = result.mqAlias === 'xs' ? true : false;
        console.log(result.mqAlias);
      }
    );

  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
