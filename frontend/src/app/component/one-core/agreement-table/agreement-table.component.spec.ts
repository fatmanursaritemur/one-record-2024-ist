import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementTableComponent } from './agreement-table.component';

describe('AgreementTableComponent', () => {
  let component: AgreementTableComponent;
  let fixture: ComponentFixture<AgreementTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementTableComponent]
    });
    fixture = TestBed.createComponent(AgreementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
