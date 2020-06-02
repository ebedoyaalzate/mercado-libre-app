import { FakeProductComponent } from './../test/fakeProduct.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

import { ProductComponent } from './product.component';



describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  const currencyPipe = new CurrencyPipe('USD');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should print product name in front', () => {
    const title = fixture.debugElement.query(By.css('.product-name')).nativeElement;
    expect(title.innerHTML).toBe(component.product.title);
  });

  it('Should print seller id in front', () => {
    const sellerId = fixture.debugElement.query(By.css('.product-unit')).nativeElement;
    expect(sellerId.innerHTML).toContain(component.product.seller.id);
  });

  it('Should print seller id in front', () => {
    const price = fixture.debugElement.query(By.css('.product-price')).nativeElement;
    const componentPrice = currencyPipe.transform(component.product.price, null, 'symbol', '1.0-0', 'en-us');
    expect(price.innerHTML).toContain(componentPrice);
  });
});
