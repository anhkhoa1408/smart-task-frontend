import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'Sign in',
    path: 'auth/sign-in',
    loadComponent: () =>
      import('./pages/auth/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
];
