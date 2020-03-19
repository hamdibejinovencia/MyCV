import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsEtCertificationsComponent } from './formations-et-certifications.component';

describe('FormationsEtCertificationsComponent', () => {
  let component: FormationsEtCertificationsComponent;
  let fixture: ComponentFixture<FormationsEtCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsEtCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsEtCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
