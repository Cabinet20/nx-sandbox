import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {UniversalDataSharedDataAccessModule, UniversalStoreFacade} from '@cabinet20/universal-state';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UniversalDataSharedDataAccessModule,
    ReactiveFormsModule,
  ],
  declarations: [LayoutComponent],
  providers: [
    UniversalStoreFacade
  ]
})
export class ComponentStoreTestComponentStoreTestModule {
}
