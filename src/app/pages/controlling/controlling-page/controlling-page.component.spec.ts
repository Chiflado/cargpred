import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllingPageComponent } from './controlling-page.component';

describe('ControllingPageComponent', () => {
  let component: ControllingPageComponent;
  let fixture: ComponentFixture<ControllingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
