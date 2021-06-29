import { Component, OnDestroy, OnInit } from '@angular/core';

import{ interval, Subscription, observable, Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  private firstObSubscription: Subscription; 
  constructor() { }

  ngOnInit() {
    // this.firstObSubscription = interval(1000).subscribe( count => { 
    //   console.log(count); 
    // });
    const customintervalObservable = new  Observable( (observer: Observer<number>) => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if ( count == 6) {
          observer.complete();
        }
        if ( count > 3 ) {
          observer.error(new Error ("Count is greater 3!") );  
        }
        count++;
      } , 1000);
    });
    this.firstObSubscription =  customintervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error); 
      alert(error.message); 
    }, () => {
      console.log('Completed!')
    })
  }

  ngOnDestroy() {
    this.firstObSubscription.unsubscribe(); 
  }

}
