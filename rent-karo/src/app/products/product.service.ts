// Angular
import { Injectable } from '@angular/core';

// Project
import { PRODUCTS } from "./mock-products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsArray: any[];
  products = PRODUCTS;

  constructor() { }

  getProducts(Id: number) {
    if(Id !== null) {
      this.productsArray = this.products;
    }
  }

  sendProducts(){
    return this.productsArray;
  }

}
