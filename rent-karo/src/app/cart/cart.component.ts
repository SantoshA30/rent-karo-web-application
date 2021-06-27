// Angular
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// Project
import { CartService } from "./cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isCartEmpty = false;
  items = [];

  checkOutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    if (this.items.length < 1) {
      this.isCartEmpty = true;
    }
  }


  // on purchase of orders
  onSubmit(): void {
    this.cartService.onPurchase(this.checkOutForm.value).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
    this.items = this.cartService.clearCart();
    this.checkOutForm.reset();
  }

  getDetails() {
    this.cartService.getDetails().subscribe(data => {
      console.log(data);
    })
  }
}
