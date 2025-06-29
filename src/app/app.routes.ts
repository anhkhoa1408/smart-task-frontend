import { Routes } from '@angular/router';
import { AppRoutingConstant } from './core/constants/app-routing.constants';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: AppRoutingConstant.AUTH,
    loadComponent: () =>
      import('./templates/auth/auth.component').then((m) => m.AuthComponent),
    loadChildren: () =>
      import('./core/router/auth.routes').then((m) => m.authRoutes),
  },
  {
    title: 'Smart Task',
    path: AppRoutingConstant.DASHBOARD,
    loadComponent: () =>
      import('./templates/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    loadChildren: () =>
      import('./core/router/dashboard.routes').then((m) => m.dashboardRoutes),
    // canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: AppRoutingConstant.NOT_FOUND,
  },
];
