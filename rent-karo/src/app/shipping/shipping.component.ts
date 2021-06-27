// Angular
import { Component, OnInit } from '@angular/core';

// Project
import { CartService } from "../cart/cart.service";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  shippingCosts = this.cartService.getShippingPrice();

}
