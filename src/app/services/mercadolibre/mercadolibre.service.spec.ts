import { mockService } from './../../test/mercaLibre.mock';
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
  const requestUrl = 'https://api.mercadolibre.com/sites/MCO/search?q=';


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

  it('service send GET request', () => {
    service.findProducts(textToFind).subscribe(response => {});
    const request = httpMock.expectOne(`${requestUrl}${textToFind}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockService);
  });

  it('service can be able to respond data', () => {
    service.findProducts(textToFind).subscribe(response => {
      expect(response.results.length).toBe(2);
    });
    const request = httpMock.expectOne(`${requestUrl}${textToFind}`);
    request.flush(mockService);
  });

  it('service can be able to respond the correct object', () => {
    service.findProducts(textToFind).subscribe(response => {
      expect(response).toEqual(mockService);
    });
    const request = httpMock.expectOne(`${requestUrl}${textToFind}`);
    request.flush(mockService);
  });
});
