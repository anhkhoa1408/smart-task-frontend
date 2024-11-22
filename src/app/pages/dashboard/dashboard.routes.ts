import { Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  {
    title: 'Home',
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
];
