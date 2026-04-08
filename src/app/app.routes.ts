import { Routes } from '@angular/router';
import { Register } from './features/register/register';
import { WelcomeLayout } from './layouts/welcome-layout/welcome-layout';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  // {
  //   path: 'welcome',
  //   component: WelcomeLayout
  // },
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
  // {
  //   path: '**',
  //   redirectTo: 'bingo',
  // },
];
