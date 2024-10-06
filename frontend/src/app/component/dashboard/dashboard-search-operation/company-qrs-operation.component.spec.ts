import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyQrsOperationComponent } from './company-qrs-operation.component';

describe('CompanyQrsOperationComponent', () => {
  let component: CompanyQrsOperationComponent;
  let fixture: ComponentFixture<CompanyQrsOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyQrsOperationComponent]
    });
    fixture = TestBed.createComponent(CompanyQrsOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
