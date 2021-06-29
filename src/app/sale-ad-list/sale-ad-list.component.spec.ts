import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAdListComponent } from './sale-ad-list.component';

describe('SaleAdListComponent', () => {
  let component: SaleAdListComponent;
  let fixture: ComponentFixture<SaleAdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleAdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
