import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  UNIVERSAL_STORE_FEATURE_KEY,
  UniversalStoreState,
} from './universal-store.reducer';

// Lookup the 'UniversalStore' feature state managed by NgRx
export const selectUniversalStoreState =
  createFeatureSelector<UniversalStoreState>(UNIVERSAL_STORE_FEATURE_KEY);
export const selectUniversalStoreLoaded = createSelector(
  selectUniversalStoreState,
  (state: UniversalStoreState) => state.loaded
);

export const selectUniversalStoreError = createSelector(
  selectUniversalStoreState,
  (state: UniversalStoreState) => state.error
);

export const selectText = createSelector(
  selectUniversalStoreState,
  (state: UniversalStoreState) => state.text
);

