import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    title: 'Home',
    path: 'home',
    loadComponent: () =>
      import('../../pages/home/home.component').then((m) => m.HomeComponent),
  },
];
