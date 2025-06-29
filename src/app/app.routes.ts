import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { AppRoutingConstant } from './core/constants/app-routing.constants';
import { AuthComponent } from './templates/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: AppRoutingConstant.AUTH,
    component: AuthComponent,
    loadChildren: () =>
      import('./core/router/auth.routes').then((m) => m.authRoutes),
  },
  {
    title: 'Smart Task',
    path: AppRoutingConstant.DASHBOARD,
    component: DashboardComponent,
    loadChildren: () =>
      import('./core/router/dashboard.routes').then((m) => m.dashboardRoutes),
    // canActivate: [authGuard],
  },
  {
    path: '**',
    redirectTo: AppRoutingConstant.NOT_FOUND,
  },
];
