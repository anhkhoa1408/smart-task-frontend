import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    title: 'Sign in',
    path: 'auth/sign-in',
    loadComponent: () =>
      import('./pages/auth/sign-in/sign-in.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    title: 'Smart Task',
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(
        (m) => m.dashboardRoutes
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard/home',
  },
  {
    path: '*',
    redirectTo: 'not-found',
  },
];
