// Angular
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// RXJS
import { Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";

// Project
import { User } from "./user.model";

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
user = new Subject<User>();

  constructor(private http: HttpClient) { }

  // signup user
  signup(email: string, password: string) {
    return this.http
    .post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVefEGiG_a_apWxUeZptGoAs0D3aHhH7I',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
    .pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn);
    }));
  }

  // login user
  login(email: string, password: string) {
   return this.http
   .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVefEGiG_a_apWxUeZptGoAs0D3aHhH7I',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
    .pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(
        resData.email,
        resData.localId,
        resData.idToken,
        +resData.expiresIn);
    }));
  }

  // error handling
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = "An unknown error occured.";
      if(!errorRes.error.error || !errorRes.error) {
        return throwError(errorMessage);
      }
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = "The email address is already in use by another account.";
          break;
        case 'OPERATION_NOT_ALLOWED':
          errorMessage = "Password sign-in is disabled for this project.";
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          errorMessage = "We have blocked all requests from this device due to unusual activity. Try again later.";
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = "There is no user record corresponding to this identifier. The user may have been deleted.";
          break;
        case 'INVALID_PASSWORD':
          errorMessage = "The password is invalid or the user does not have a password.";
          break;
        case 'USER_DISABLED':
          errorMessage = "The user account has been disabled by an administrator.";
          break;
      }
      return throwError(errorMessage);
  }

  // user authentication
  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
      const user = new User(
        email,
        userId,
        token,
        expirationDate);
      this.user.next(user);
  }
}
