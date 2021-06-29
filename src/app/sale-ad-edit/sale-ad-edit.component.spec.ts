import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAdEditComponent } from './sale-ad-edit.component';

describe('SaleAdEditComponent', () => {
  let component: SaleAdEditComponent;
  let fixture: ComponentFixture<SaleAdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleAdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
