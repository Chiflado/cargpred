import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainMovementsComponent } from './train-movements.component';

describe('TrainMovementsComponent', () => {
  let component: TrainMovementsComponent;
  let fixture: ComponentFixture<TrainMovementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainMovementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
