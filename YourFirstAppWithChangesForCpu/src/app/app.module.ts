import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './inventory/product-list/product-list.component';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';

import { CheckoutModule } from './checkout/checkout.module';
import { InventoryModule } from './inventory/inventory.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CheckoutModule,
    InventoryModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, Title],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/