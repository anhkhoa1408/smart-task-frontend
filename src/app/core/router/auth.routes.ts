import { Route } from '@angular/router';

export const authRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    title: 'Sign in',
    path: 'sign-in',
    loadComponent: () =>
      import('./../../pages/auth/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    title: 'Sign up',
    path: 'sign-up',
    loadComponent: () =>
      import('./../../pages/auth/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
];
