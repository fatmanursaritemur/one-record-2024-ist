import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCoreCompleteComponent } from './one-core-complete.component';

describe('OneCoreCompleteComponent', () => {
  let component: OneCoreCompleteComponent;
  let fixture: ComponentFixture<OneCoreCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneCoreCompleteComponent]
    });
    fixture = TestBed.createComponent(OneCoreCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
