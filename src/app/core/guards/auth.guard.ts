import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthState } from '../../pages/auth/_store/auth.store';
import { map, of } from 'rxjs';
import { AppRoutingConstant } from '../constants/app-routing.constants';
import { LocalStorageConstant } from '../constants/local-storage.constants';
import { QueryParamsConstant } from '../constants/query-params.constants';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);

  const isAuthenticated = !!localStorageService.getItem<AuthState>(
    LocalStorageConstant.AUTH
  )?.accessToken;

  return of(isAuthenticated).pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      }

      const urlTree = router.createUrlTree([AppRoutingConstant.AUTH_SIGN_IN], {
        queryParams: {
          [QueryParamsConstant.REDIRECT_URL]: state.url,
        },
      });
      return urlTree;
    })
  );
};
