import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAdShowComponent } from './sale-ad-show.component';

describe('SaleAdShowComponent', () => {
  let component: SaleAdShowComponent;
  let fixture: ComponentFixture<SaleAdShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleAdShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleAdShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
