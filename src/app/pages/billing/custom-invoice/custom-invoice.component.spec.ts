import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInvoiceComponent } from './custom-invoice.component';

describe('CustomInvoiceComponent', () => {
  let component: CustomInvoiceComponent;
  let fixture: ComponentFixture<CustomInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
