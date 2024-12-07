import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    title: 'Home',
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
