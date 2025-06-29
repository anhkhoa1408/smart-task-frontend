import { Routes } from '@angular/router';
import { AppRoutingConstant } from '../constants/app-routing.constants';

export const dashboardRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: AppRoutingConstant.PROJECT,
  },
  {
    path: '',
    children: [
      {
        path: AppRoutingConstant.HOME,
        loadComponent: () =>
          import('../../pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: AppRoutingConstant.PROJECT,
        loadComponent: () =>
          import('../../pages/project/project-wrapper.component').then(
            (m) => m.ProjectWrapperComponent
          ),
      },
    ],
  },
];
