import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUniversalStore from './+state/universal-store/universal-store.reducer';
import { UniversalStoreEffects } from './+state/universal-store/universal-store.effects';
import { UniversalStoreFacade } from './+state/universal-store/universal-store.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUniversalStore.UNIVERSAL_STORE_FEATURE_KEY,
      fromUniversalStore.universalStoreReducer
    ),
    EffectsModule.forFeature([UniversalStoreEffects]),
  ],
  providers: [UniversalStoreFacade],
})
export class UniversalDataSharedDataAccessModule {}
