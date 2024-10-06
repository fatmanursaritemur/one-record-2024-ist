import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftLoadingComponent } from './aircraft-loading.component';

describe('AircraftLoadingComponent', () => {
  let component: AircraftLoadingComponent;
  let fixture: ComponentFixture<AircraftLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AircraftLoadingComponent]
    });
    fixture = TestBed.createComponent(AircraftLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
