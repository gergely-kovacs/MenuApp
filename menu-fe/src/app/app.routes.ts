import { Routes } from '@angular/router';
import { MenuPageComponent } from './menu-page/menu-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  {
    path: 'menu',
    component: MenuPageComponent,
  },
];
