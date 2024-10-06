import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementHeaderComponent } from './agreement-header.component';

describe('AgreementHeaderComponent', () => {
  let component: AgreementHeaderComponent;
  let fixture: ComponentFixture<AgreementHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementHeaderComponent]
    });
    fixture = TestBed.createComponent(AgreementHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
