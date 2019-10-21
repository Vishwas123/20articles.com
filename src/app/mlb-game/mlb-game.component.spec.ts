import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MlbGameComponent } from './mlb-game.component';

describe('MlbGameComponent', () => {
  let component: MlbGameComponent;
  let fixture: ComponentFixture<MlbGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
