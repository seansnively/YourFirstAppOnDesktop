import { ProductDetailsComponent } from './product-details.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { TestBed} from '@angular/core/testing';
import { CartService } from '../../cart.service';

import { products } from '../../products';
import { browser } from 'protractor';
describe('ProductDetailComponent', () => {
    
    TestBed.configureTestingModule({
        declarations: [
            ProductDetailsComponent
        ]
      }).compileComponents();
    beforeEach(() => {
        //cartService = new CartService(null);
    });
    it('#addToCart() should add a product to the cart', () => {
        const fixture = TestBed.createComponent(ProductDetailsComponent);
        let comp = fixture.componentInstance;
        comp.product = 'hello';
        comp.addToCart(comp.product);
        expect(comp.cartService1.getItems()[0]).toEqual(comp.product);
        
      });
})