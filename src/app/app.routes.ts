import { Routes } from '@angular/router';
import { authGuard } from './private/shared/guards/auth/auth.guard';

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
          canActivate: [authGuard],
          loadChildren: () => import('./private/shared/routes/features.route').then((r) => r.featuresRoutes),
     },
     {
          path: '**',
          redirectTo: 'login'
     }
];