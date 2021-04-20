import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektsComponent } from './projekts.component';

describe('ProjektsComponent', () => {
  let component: ProjektsComponent;
  let fixture: ComponentFixture<ProjektsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
