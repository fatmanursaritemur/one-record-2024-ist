import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCargoOperationComponent } from './company-cargo-operation.component';

describe('CompanyCargoOperationComponent', () => {
  let component: CompanyCargoOperationComponent;
  let fixture: ComponentFixture<CompanyCargoOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyCargoOperationComponent]
    });
    fixture = TestBed.createComponent(CompanyCargoOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
