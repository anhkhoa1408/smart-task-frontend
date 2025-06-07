import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './templates/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/router/auth.routes').then((m) => m.authRoutes),
  },
  {
    title: 'Smart Task',
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./core/router/dashboard.routes').then((m) => m.dashboardRoutes),
    // canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
