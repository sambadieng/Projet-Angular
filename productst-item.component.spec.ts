import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductstItemComponent } from './productst-item.component';

describe('ProductstItemComponent', () => {
  let component: ProductstItemComponent;
  let fixture: ComponentFixture<ProductstItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductstItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductstItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
