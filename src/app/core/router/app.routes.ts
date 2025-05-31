import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { DashboardComponent } from '../templates/dashboard/dashboard.component';

export const routes: Routes = [
  {
    title: 'Sign in',
    path: 'auth/sign-in',
    loadComponent: () =>
      import('../pages/auth/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    title: 'Sign up',
    path: 'auth/sign-up',
    loadComponent: () =>
      import('../pages/auth/sign-up/sign-up.component').then(
        (m) => m.SignUpComponent
      ),
  },
  {
    title: 'Smart Task',
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard.routes').then((m) => m.dashboardRoutes),
    canActivate: [authGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard/home',
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
