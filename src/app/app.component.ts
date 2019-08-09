import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serchText = '';
  products: any;

  constructor(
    private http: HttpClient
  ) {}

  findProduct() {
    this.http.get<any>(`https://api.mercadolibre.com/sites/MCO/search?q=${this.serchText}`, {}).subscribe(res => {
      this.products = res.results;
      console.log(this.products);
    });
  }
}
