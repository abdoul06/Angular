import { 
  ViewChild, 
  AfterContentChecked,
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  ElementRef, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  SimpleChange, 
  ViewEncapsulation, 
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, native
})
export class ServerComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy  {
  @Input('srvElement') element: {name: string, type: string, content: string };
  @Input() name: string; 
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;


  constructor() {
    console.log('construco called')
   }

   ngOnChanges(changes: SimpleChange) {
    console.log('ngOnchanges called');    
    console.log(changes);  
   }
  ngOnInit(): void {
    console.log('ng onit called');
    console.log('textCOntent' + this.header.nativeElement.textContent)
    console.log('Text content of paragh: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('NgDoCeck!');
  } 

  ngAfterContentInit() {
    console.log('ngAfterContentinit');
    console.log('Text content INIT of paragh: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('ngAfterConetnChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewtinit');
    console.log('textCOntent \n' + this.header.nativeElement.textContent)

  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngDestroy called');
  }

}
function ViewContentChild(arg0: string, arg1: { static: boolean; }) {
  throw new Error('Function not implemented.');
}

