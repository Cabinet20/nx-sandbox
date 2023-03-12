import { createAction, props } from '@ngrx/store';

export const initUniversalStore = createAction('[UniversalStore Page] Init');

export const updateText = createAction('[UniversalStore/API] Update text',
  props<{ text: string }>());

export const loadUniversalStoreSuccess = createAction(
  '[UniversalStore/API] Load UniversalStore Success',
  props<{ updatedText: string }>()
);

export const loadUniversalStoreFailure = createAction(
  '[UniversalStore/API] Load UniversalStore Failure',
  props<{ error: any }>()
);
