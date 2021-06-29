import { TestBed, async } from '@angular/core/testing';

import { InputTextComponent } from './input-text.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputTextComponent
      ],
    }).compileComponents();
  }));

  it(`should render @input`, async(() => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const app = fixture.debugElement.componentInstance;
    app.text = 'test input';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p').innerText).toEqual('test input');
  }));
  
});


