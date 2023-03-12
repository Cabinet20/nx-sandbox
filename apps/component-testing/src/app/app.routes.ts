import { Route } from '@angular/router';
import {
  LayoutComponent
} from '../../../../libs/component-store-test/component-store-test/src/lib/layout/layout.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LayoutComponent,
    pathMatch: 'full'
  }
];
