import { MercadolibreService } from './services/mercadolibre/mercadolibre.service';
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
    private mercadoLibreService: MercadolibreService
  ) {}

  findProduct() {
    this.mercadoLibreService.findProducts(this.serchText).subscribe(res => {
      this.products = res.results;
      console.log(this.products);
    });
  }
}
