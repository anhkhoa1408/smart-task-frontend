import { Routes } from '@angular/router';
import { AppRoutingConstant } from './core/constants/app-routing.constants';
import { authGuard } from './core/guards/auth.guard';
import { authRedirectGuard } from './core/guards/auth-redirect.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutingConstant.DASHBOARD,
  },
  {
    path: AppRoutingConstant.AUTH,
    canActivate: [authRedirectGuard],
    loadComponent: () =>
      import('./templates/auth/auth.component').then((m) => m.AuthComponent),
    loadChildren: () =>
      import('./core/router/auth.routes').then((m) => m.authRoutes),
  },
  {
    title: 'Smart Task',
    path: AppRoutingConstant.DASHBOARD,
    canActivate: [authGuard],
    loadComponent: () =>
      import('./templates/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    loadChildren: () =>
      import('./core/router/dashboard.routes').then((m) => m.dashboardRoutes),
  },
  {
    path: '**',
    redirectTo: AppRoutingConstant.NOT_FOUND,
  },
];
