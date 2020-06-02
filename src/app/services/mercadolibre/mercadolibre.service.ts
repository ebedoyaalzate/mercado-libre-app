import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadolibreService {

  constructor(private http: HttpClient) { }

  findProducts(text) {
    return this.http.get<any>(`https://api.mercadolibre.com/sites/MCO/search?q=${text}`, {});
  }
}
