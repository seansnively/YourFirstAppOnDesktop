import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
 
const routes: Routes = [
    {   path: 'cart',   component: CartComponent   },
    {   path: 'shipping',   component: ShippingComponent   },
  ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }