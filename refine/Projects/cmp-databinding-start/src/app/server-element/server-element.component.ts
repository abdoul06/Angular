import { 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, 
  ContentChild, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChanges, 
  ViewChild, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements 
  OnInit,  
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
  {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string; 
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  
  constructor() {
    console.log('Constructor called');
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called');
    console.log(changes)

   }

  ngOnInit(): void {
    console.log('ngOnit  called');
    console.log('textcontent' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent)

  }

  ngDoCheck() {
    console.log('ngDoCheck is called ');
    
  }

  ngAfterContentInit() {
    console.log('ngAfterContentINIT called ')
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked called ")
  }

  ngAfterViewInit() {
    console.log('ngAfterViewINIT called ')
    console.log('text in view init: ' + this.header.nativeElement.textContent);

  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked called ")
  }

  ngOnDestroy(){
    console.log("after OnDestroty called ")
  }
}
