import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPieComponent } from './other-pie.component';

describe('OtherPieComponent', () => {
  let component: OtherPieComponent;
  let fixture: ComponentFixture<OtherPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherPieComponent]
    });
    fixture = TestBed.createComponent(OtherPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
