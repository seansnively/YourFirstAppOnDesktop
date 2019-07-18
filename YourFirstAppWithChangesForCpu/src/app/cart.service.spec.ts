import { CartService } from './cart.service';
import { products } from './products';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('Service: CartService', () => {
    TestBed.configureTestingModule({
        providers: [
          CartService
        ],
        imports: [
            products
        ]
      });
      let productsList = products;
      let cartService: CartService;
    beforeEach(() => {
        cartService = new CartService(null);
    });

    it('#getItems should, by default, return an empty array', () => {
        expect(cartService.getItems()).toEqual([]);
    });

    it('#addToCart should add a product to the cart', () => {
        cartService.addToCart(productsList[0]);
        expect(cartService.getItems()).toEqual([productsList[0]]);
    });

    it('#addToCart should be able to add multiple products to the cart', () => {
        cartService.addToCart(productsList[0]);
        cartService.addToCart(productsList[1]);
        cartService.addToCart(productsList[2]);
        expect(cartService.getItems()[0].name).toEqual(productsList[0].name);
        expect(cartService.getItems()[1].name).toEqual(productsList[1].name);
        expect(cartService.getItems()[2].name).toEqual(productsList[2].name);
    });

    it('#clearCart should set the cart to empty', () => {
        cartService.addToCart(productsList[0]);
        cartService.addToCart(productsList[1]);
        cartService.addToCart(productsList[2]);
        expect(cartService.getItems()[0].name).toEqual(productsList[0].name);
        expect(cartService.getItems()[1].name).toEqual(productsList[1].name);
        expect(cartService.getItems()[2].name).toEqual(productsList[2].name);
        cartService.clearCart();
        expect(cartService.getItems()).toEqual([]);
    });
});