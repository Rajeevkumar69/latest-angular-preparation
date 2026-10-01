import { Routes } from '@angular/router';

export const routes: Routes = [
     {
          path: '',
          loadComponent: () =>
               import('./public/login/login').then((c) => c.Login)
     },
     {
          path: 'login',
          redirectTo: '',
          pathMatch: 'full'
     },
     {
          path: '',
          canActivate: [],
          loadChildren: () => import('./private/shared/routes/features.route').then((r) => r.featuresRoutes),
     }
];