import { Route } from '@angular/router';
import { AppRoutingConstant } from '../constants/app-routing.constants';

export const authRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutingConstant.SIGN_IN,
  },

  {
    title: 'Sign in',
    path: AppRoutingConstant.SIGN_IN,
    loadComponent: () =>
      import('./../../pages/auth/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    title: 'Sign up',
    path: AppRoutingConstant.SIGN_UP,
    loadComponent: () =>
      import('./../../pages/auth/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
];
