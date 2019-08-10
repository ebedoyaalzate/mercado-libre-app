import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  seller: string;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>(`https://api.mercadolibre.com/users/${this.product.seller.id}`, {}).subscribe(res => {
      this.seller = res
    });
  }

}
