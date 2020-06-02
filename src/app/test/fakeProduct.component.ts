import { mockProducts } from './mercaLibre.mock';
import { MercadolibreService } from './../services/mercadolibre/mercadolibre.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: '../product/product.component.html',
  styleUrls: ['../product/product.component.scss']
})
export class FakeProductComponent implements OnInit {
  product = mockProducts.results[0];

  seller: any;

  constructor(private mercadoLibreService: MercadolibreService) { }

  ngOnInit() {
    this.mercadoLibreService.findSeller(this.product.seller.id).subscribe(res => {
      this.seller = res;
    });
  }
}
