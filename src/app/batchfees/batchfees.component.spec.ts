import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchfeesComponent } from './batchfees.component';

describe('BatchfeesComponent', () => {
  let component: BatchfeesComponent;
  let fixture: ComponentFixture<BatchfeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchfeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchfeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
