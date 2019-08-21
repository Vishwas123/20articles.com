import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongKitchenCardComponent } from './long-kitchen-card.component';

describe('LongKitchenCardComponent', () => {
  let component: LongKitchenCardComponent;
  let fixture: ComponentFixture<LongKitchenCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongKitchenCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongKitchenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
