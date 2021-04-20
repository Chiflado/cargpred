import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektControllingComponent } from './projekt-controlling.component';

describe('ProjektControllingComponent', () => {
  let component: ProjektControllingComponent;
  let fixture: ComponentFixture<ProjektControllingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektControllingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektControllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
