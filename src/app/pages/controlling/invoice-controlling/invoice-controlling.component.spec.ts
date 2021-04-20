import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceControllingComponent } from './invoice-controlling.component';

describe('InvoiceControllingComponent', () => {
  let component: InvoiceControllingComponent;
  let fixture: ComponentFixture<InvoiceControllingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceControllingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceControllingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
