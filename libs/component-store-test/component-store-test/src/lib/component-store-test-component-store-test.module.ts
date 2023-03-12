import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {
  UniversalDataSharedDataAccessModule,
  UniversalStoreFacade,
} from '@cabinet20/universal-state';
import { ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPageComponent } from './another-page/another-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full',
  },
  {
    path: 'page',
    component: PageComponent,
    pathMatch: 'full',
  },
  {
    path: 'another-page',
    component: AnotherPageComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UniversalDataSharedDataAccessModule,
    ReactiveFormsModule,
  ],
  declarations: [LayoutComponent, PageComponent, AnotherPageComponent],
  providers: [UniversalStoreFacade],
})
export class ComponentStoreTestComponentStoreTestModule {}
