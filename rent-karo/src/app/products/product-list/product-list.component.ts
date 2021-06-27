// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { PRODUCTS } from "../mock-products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
