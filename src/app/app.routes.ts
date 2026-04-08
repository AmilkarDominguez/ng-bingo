import { Routes } from '@angular/router';
import { Register } from './features/register/register';
import { WelcomeLayout } from './layouts/welcome-layout/welcome-layout';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Bingo } from './features/bingo/bingo';

export const routes: Routes = [
  {
    path: '',
    component: Bingo
  },
  // {
  //   path: 'bingo',
  //   component: MainLayout,
  //   children: [
  //     {
  //       path: '',
  //       loadComponent: () => import('./features/bingo/bingo').then((m) => m.Bingo),
  //     },
  //   ],
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
