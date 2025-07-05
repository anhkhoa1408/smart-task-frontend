import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthState } from '../../pages/auth/_store/auth.store';
import { LocalStorageConstant } from '../constants/local-storage.constants';
import { inject } from '@angular/core';
import { map, of } from 'rxjs';
import { AppRoutingConstant } from '../constants/app-routing.constants';

export const authRedirectGuard: CanActivateFn = (route, state) => {
  const localStorageService = inject(LocalStorageService);
  const router = inject(Router);

  const isAuthenticated = !!localStorageService.getItem<AuthState>(
    LocalStorageConstant.AUTH
  )?.accessToken;
  return of(isAuthenticated).pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        const urlTree = router.createUrlTree([
          AppRoutingConstant.DASHBOARD_PROJECT,
        ]);
        return urlTree;
      }
      return true;
    })
  );
};
