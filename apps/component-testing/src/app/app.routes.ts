import {Route} from '@angular/router';
import {LayoutComponent} from '@cabinet20/component-store-test';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('@cabinet20/component-store-test').then(m => m.ComponentStoreTestComponentStoreTestModule),
  },
];
