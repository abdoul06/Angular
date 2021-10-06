import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from './app.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'breakpoint-obs';
  scrollCollapse: boolean = false; 
  isFocused: boolean = false; 

  constructor(private breakpointService: AppService) {}

  ngOnInit() {
    console.log(window.pageYOffset)
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (this.scrollCollapse && window.pageYOffset >= 100 && this.breakpointService.isMobile() && !this.isFocused) {
      console.log('mobile')
    }
    this.isFocused = false;
  }

  click() {
    console.log(window.pageYOffset)
    
  }
 
}
