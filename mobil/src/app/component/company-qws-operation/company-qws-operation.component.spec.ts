import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyQwsOperationComponent } from './company-qws-operation.component';

describe('CompanyQwsOperationComponent', () => {
  let component: CompanyQwsOperationComponent;
  let fixture: ComponentFixture<CompanyQwsOperationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyQwsOperationComponent]
    });
    fixture = TestBed.createComponent(CompanyQwsOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
