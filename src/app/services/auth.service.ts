import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
  }

  async login(): Promise<void> {
    this.loggedIn = true;
  }

  async logout(): Promise<void> {
    this.loggedIn = false;
  }
}
