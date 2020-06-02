import { mockProducts, mockSeller } from './../../test/mercaLibre.mock';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { MercadolibreService } from './mercadolibre.service';

describe('MercadolibreService', () => {
  let service: MercadolibreService;
  let httpMock: HttpTestingController;
  const textToFind = 'Play';
  const sellerId = 1;
  const requesProductstUrl = 'https://api.mercadolibre.com/sites/MCO/search?q=';
  const requesSellerUrl = 'https://api.mercadolibre.com/users';


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MercadolibreService]
    });
    service = TestBed.get(MercadolibreService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('FindProducts method', () => {

    it('service send GET request', () => {
      service.findProducts(textToFind).subscribe(response => { });
      const request = httpMock.expectOne(`${requesProductstUrl}${textToFind}`);
      expect(request.request.method).toBe('GET');
      request.flush(mockProducts);
    });

    it('service can be able to respond data', () => {
      service.findProducts(textToFind).subscribe(response => {
        expect(response.results.length).toBe(2);
      });
      const request = httpMock.expectOne(`${requesProductstUrl}${textToFind}`);
      request.flush(mockProducts);
    });

    it('service can be able to respond the correct object', () => {
      service.findProducts(textToFind).subscribe(response => {
        expect(response).toEqual(mockProducts);
      });
      const request = httpMock.expectOne(`${requesProductstUrl}${textToFind}`);
      request.flush(mockProducts);
    });
  });

  describe('FindSeller method', () => {

    it('service send GET request', () => {
      service.findSeller(sellerId).subscribe(response => { });
      const request = httpMock.expectOne(`${requesSellerUrl}/${sellerId}`);
      expect(request.request.method).toBe('GET');
      request.flush(mockSeller);
    });

    it('service can be able to respond the correct object', () => {
      service.findSeller(sellerId).subscribe(response => {
        expect(response).toEqual(mockSeller);
      });
      const request = httpMock.expectOne(`${requesSellerUrl}/${sellerId}`);
      request.flush(mockSeller);
    });
  });
});
