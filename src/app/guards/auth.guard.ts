import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.isAuthenticated().then((isAuthenticated) => {
    if (isAuthenticated) {
      return true;
    } else {
      console.log('Not authenticated... Redirecting to home page');
      router.navigate(['/']);
      return false;
    }
  });
};
