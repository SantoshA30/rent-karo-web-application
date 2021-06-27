// Angular
import { Component, OnDestroy, OnInit } from '@angular/core';

// RXJSa
import { Subscription } from 'rxjs';

// Project
import { CartService } from '../cart/cart.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  subscription: Subscription;
  items = [];
  itemCount: number;
  cities = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Bengaluru" },
    { id: 3, name: "Delhi" },
    { id: 4, name: "Chennai" }
  ]
  cityId: number;

  constructor(private cartService: CartService, private authService: AuthService) {
    // subscribe to item count stream
    this.subscription = cartService.itemCount$.subscribe(count => { this.itemCount = count });
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
      if (this.isAuthenticated) {
          this.removeModalAfterLogin();
      }
    })
  }

  setCityId(cityId: number) {
    this.cityId = cityId;
  }

  private removeModalAfterLogin() {
    const removeModalBackdrop = document.getElementsByClassName("modal-backdrop")[0];
    removeModalBackdrop.classList.remove("modal-backdrop");
    const removeModalBackdrop1 = document.getElementsByClassName("modal-open")[0];
    removeModalBackdrop1.removeAttribute("style");
    removeModalBackdrop1.classList.remove("modal-open");
  }

  // prevent memory leak
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userSub.unsubscribe();
  }


}
