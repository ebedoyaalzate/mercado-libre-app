import { MercadolibreService } from './../services/mercadolibre/mercadolibre.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;
  seller: any;

  constructor(private mercadoLibreService: MercadolibreService) { }

  ngOnInit() {
    this.mercadoLibreService.findSeller(this.product.seller.id).subscribe(res => {
      this.seller = res;
    });
  }

}
