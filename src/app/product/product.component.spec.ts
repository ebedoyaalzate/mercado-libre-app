import { MercadolibreService } from './../services/mercadolibre/mercadolibre.service';
import { FakeProductComponent } from './../test/fakeProduct.component';
import { mockProducts, mockSeller } from './../test/mercaLibre.mock';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

describe('ProductComponent', () => {
  let component: FakeProductComponent;
  let fixture: ComponentFixture<FakeProductComponent>;

  const currencyPipe = new CurrencyPipe('USD');

  beforeEach(async(() => {
    const mercadolibreServiceStub = () => ({
      findSeller: id => ({ subscribe: f => f(mockSeller) })
    });

    TestBed.configureTestingModule({
      declarations: [ FakeProductComponent ],
      providers: [
        { provide: MercadolibreService, useFactory: mercadolibreServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should print product name in front', () => {
    const title = fixture.debugElement.query(By.css('.product-name')).nativeElement;
    expect(title.innerHTML).toBe(component.product.title);
  });

  it('Should print price in front', () => {
    const price = fixture.debugElement.query(By.css('.product-price')).nativeElement;
    const componentPrice = currencyPipe.transform(component.product.price, null, 'symbol', '1.0-0', 'en-us');
    expect(price.innerHTML).toContain(componentPrice);
  });

  it('should search seller when the component is create', () => {
    const mercadolibreServiceStub: MercadolibreService = fixture.debugElement.injector.get(
      MercadolibreService
    );
    spyOn(mercadolibreServiceStub, 'findSeller').and.callThrough();
    component.ngOnInit();
    expect(mercadolibreServiceStub.findSeller).toHaveBeenCalled();
  });

  it('should get the correct seller from service', () => {
    component.ngOnInit();
    expect(component.seller.nickName).toBe(mockSeller.nickName);
  });

  it('should display seller name in page', () => {
    component.seller.nickname = mockSeller.nickName;
    const seller = fixture.debugElement.query(By.css('.product-unit-name'));
    fixture.detectChanges();
    expect(seller.nativeElement.textContent).toBe(mockSeller.nickName);
  });
});
