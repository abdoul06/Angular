import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints } from 'src/styling/breakpoints';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public isMobile$: Observable<boolean>;
  public isTablet$: Observable<boolean>;
  public isDesktop$: Observable<boolean>;
  
  constructor(private observer: BreakpointObserver) {
    this.isMobile$ = observer.observe([Breakpoints.Mobile]).pipe(
      shareReplay(), map(
        (res) => res.matches)
    );
    this.isTablet$ = observer.observe([Breakpoints.Tablet]).pipe(shareReplay(), map((res) => res.matches));
    this.isDesktop$ = observer.observe([Breakpoints.Desktop]).pipe(shareReplay(), map((res) => res.matches));
    
  }


  public isMobile(): boolean {
    return this.observer.isMatched([Breakpoints.Mobile]);
  }

  public isTablet(): boolean {
    return this.observer.isMatched([Breakpoints.Tablet]);
  }

  public isDesktop(): boolean {
    return this.observer.isMatched([Breakpoints.Desktop]);
  }
}
