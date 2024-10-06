import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkPieComponent } from './tk-pie.component';

describe('TkPieComponent', () => {
  let component: TkPieComponent;
  let fixture: ComponentFixture<TkPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TkPieComponent]
    });
    fixture = TestBed.createComponent(TkPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
