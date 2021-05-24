import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataConfirmationComponent } from './data-confirmation.component';

describe('DataConfirmationComponent', () => {
  let component: DataConfirmationComponent;
  let fixture: ComponentFixture<DataConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
