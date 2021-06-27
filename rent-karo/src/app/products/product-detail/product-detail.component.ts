// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Project
import { PRODUCTS } from "../mock-products";
import { CartService } from "../../cart/cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  mockProducts = PRODUCTS;
  product;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    //get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // find the product that correspond with the id provided in route
    this.product = this.mockProducts.find(opt => opt.id === productIdFromRoute );
  }

  addToCart(item) {
    this.cartService.addToCart(item);
    window.alert("Product added to the cart.");
  }

}
