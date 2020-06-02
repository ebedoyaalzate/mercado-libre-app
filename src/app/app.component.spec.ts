import { mockService } from './test/mercaLibre.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MercadolibreService } from './services/mercadolibre/mercadolibre.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const mercadolibreServiceStub = () => ({
      findProducts: serchText => ({ subscribe: f => f(mockService) })
    });
    TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: MercadolibreService, useFactory: mercadolibreServiceStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('Should print Title in front', () => {
    const title = fixture.debugElement.query(By.css('.subtitle')).nativeElement;
    expect(title.innerHTML).toBe('Mercado libre');
  });

  it('should call findProducts from service', () => {
    const mercadolibreServiceStub: MercadolibreService = fixture.debugElement.injector.get(
      MercadolibreService
    );
    spyOn(mercadolibreServiceStub, 'findProducts').and.callThrough();
    component.findProduct();
    expect(mercadolibreServiceStub.findProducts).toHaveBeenCalled();
  });

  it('should get products from service', () => {
    component.findProduct();
    expect(component.products).toBe(mockService.results);
  });

  it('should search product when push search button', () => {
    component.serchText = 'Play Station';
    const searchButton = fixture.debugElement.query(By.css('.search')).nativeElement;
    searchButton.click();
    fixture.detectChanges();
    expect(component.products).toBe(mockService.results);
  });
});
