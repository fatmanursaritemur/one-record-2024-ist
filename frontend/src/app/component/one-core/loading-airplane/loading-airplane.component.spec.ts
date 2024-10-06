import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAirplaneComponent } from './loading-airplane.component';

describe('LoadingAirplaneComponent', () => {
  let component: LoadingAirplaneComponent;
  let fixture: ComponentFixture<LoadingAirplaneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingAirplaneComponent]
    });
    fixture = TestBed.createComponent(LoadingAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
