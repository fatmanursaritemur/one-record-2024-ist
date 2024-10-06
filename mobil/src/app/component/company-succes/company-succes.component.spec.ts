import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySuccesComponent } from './company-succes.component';

describe('CompanySuccesComponent', () => {
  let component: CompanySuccesComponent;
  let fixture: ComponentFixture<CompanySuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySuccesComponent]
    });
    fixture = TestBed.createComponent(CompanySuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
