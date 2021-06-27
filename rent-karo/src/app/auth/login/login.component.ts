// Angular
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// Project
import { AuthResponseData, AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginModeSignup = false;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  switchModeToLogin() {
    this.isLoginModeSignup = false;
  }

  switchModeToSignup() {
    this.isLoginModeSignup = true;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (!this.isLoginModeSignup) {
     authObs = this.authService.login(email, password);
    } else {
    authObs = this.authService.signup(email, password);
    }

   authObs.subscribe(
    resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['/']);
    },
   errorMessage => {
    console.log(errorMessage);
     this.error = errorMessage;
     this.isLoading = false;
   }
 );

    form.reset();
}

}
