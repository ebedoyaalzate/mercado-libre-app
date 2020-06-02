import { mockService } from './mercaLibre.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: '../product/product.component.html',
  styleUrls: ['../product/product.component.scss']
})
export class FakeProductComponent implements OnInit {
  product = mockService.results[0];

  constructor() { }

  ngOnInit() {
  }
}
