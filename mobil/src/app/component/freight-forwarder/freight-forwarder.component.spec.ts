import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FreightForwarderComponent} from './freight-forwarder.component';

describe('ForwarderComponent', () => {
  let component: FreightForwarderComponent;
  let fixture: ComponentFixture<FreightForwarderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreightForwarderComponent]
    });
    fixture = TestBed.createComponent(FreightForwarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
