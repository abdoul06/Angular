import { InputTextComponent } from './../input-text/input-text.component';
import { TestBed, async } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        InputTextComponent
      ],
    }).compileComponents();
  }));

  it(`should have as text 'Home Page'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.text).toEqual('Home Page');
  }));
});
