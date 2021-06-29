import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAdDetailComponent } from './sale-ad-detail.component';

describe('SaleAdDetailComponent', () => {
  let component: SaleAdDetailComponent;
  let fixture: ComponentFixture<SaleAdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleAdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
