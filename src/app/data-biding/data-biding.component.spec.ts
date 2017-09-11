import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBidingComponent } from './data-biding.component';

describe('DataBidingComponent', () => {
  let component: DataBidingComponent;
  let fixture: ComponentFixture<DataBidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
