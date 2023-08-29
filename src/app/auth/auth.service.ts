import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null as any);
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `${environment.FIREBASE_ATHUNTICATION_URL}accounts:signUp?key=${environment.FIRE_BASE_API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        }),
        catchError(this.handleError)
      );
  }
  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `${environment.FIREBASE_ATHUNTICATION_URL}accounts:signInWithPassword?key=${environment.FIRE_BASE_API_KEY}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        }),
        catchError(this.handleError)
      );
  }
  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An unknown error occured!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError({ errorMsg });
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email does not exist.';
        break;
      case 'EMAIL_EXISTS':
        errorMsg = 'This email exists already';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'Invalid Password';
        break;
    }
    return throwError(errorMsg);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }
  logOut() {
    this.user.next(null as any);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData') as any);
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration = new Date(
        userData._tokenExpirationDate
      ).getTime();
      const expirationTime = expirationDuration - new Date().getTime();
      this.autoLogOut(expirationTime);
    }
  }
  autoLogOut(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration);
  }
}
