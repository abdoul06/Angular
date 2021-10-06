import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  public results1$;
  public results2$;

  constructor(private _observer: BreakpointObserver) {}

  ngOnInit() {
    this.results1$ = this._observer.observe('(max-width: 350px)')
    this.results2$ = this._observer.observe(['(max-width: 350px)', '(max-width: 450px)'])
  }
}
