import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Splash2Component } from './splash2.component';

describe('Splash2Component', () => {
  let component: Splash2Component;
  let fixture: ComponentFixture<Splash2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Splash2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Splash2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
