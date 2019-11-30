import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicationDialogComponent } from './add-publication-dialog.component';

describe('AddPublicationDialogComponent', () => {
  let component: AddPublicationDialogComponent;
  let fixture: ComponentFixture<AddPublicationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPublicationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublicationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
