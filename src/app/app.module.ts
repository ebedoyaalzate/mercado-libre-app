import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxCurrencyModule } from 'ngx-currency';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

import { FakeProductComponent } from './test/fakeProduct.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FakeProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
