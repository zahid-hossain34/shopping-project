import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup | any;
  isLoaginMode = true;
  isLoading = false;
  error: string | null = null;
  authobs!: Observable<AuthResponseData>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }
  onSubmite() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.isLoading = true;
    if (this.isLoaginMode) {
      this.authobs = this.authService.signIn(email, password);
    } else {
      if (this.loginForm.invalid) return;
      this.authobs = this.authService.signup(email, password);
    }
    this.authobs.subscribe({
      next: (res) => {
        this.isLoading = false;
        console.log(res);
        this.loginForm.reset();
      },
      error: (errorMsg) => {
        this.error = errorMsg;
        this.isLoading = false;
      },
    });
  }
  swithMode() {
    this.loginForm.reset();
    this.isLoaginMode = !this.isLoaginMode;
  }
}
