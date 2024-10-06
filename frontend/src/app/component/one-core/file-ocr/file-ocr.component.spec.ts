import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOcrComponent } from './file-ocr.component';

describe('FileOcrComponent', () => {
  let component: FileOcrComponent;
  let fixture: ComponentFixture<FileOcrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileOcrComponent]
    });
    fixture = TestBed.createComponent(FileOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
