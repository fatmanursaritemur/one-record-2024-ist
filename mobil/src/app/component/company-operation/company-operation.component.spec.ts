import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOperationComponent } from './company-operation.component';

describe('CompanyOperationComponent', () => {
  let component: CompanyOperationComponent;
  let fixture: ComponentFixture<CompanyOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyOperationComponent]
    });
    fixture = TestBed.createComponent(CompanyOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
