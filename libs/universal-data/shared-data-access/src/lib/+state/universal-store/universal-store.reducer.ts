import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createReducer, on, Action} from '@ngrx/store';

import * as UniversalStoreActions from './universal-store.actions';

export const UNIVERSAL_STORE_FEATURE_KEY = 'universalStore';

export interface UniversalStoreState {
  text: string | number; // which UniversalStore record has been selected
  loaded: boolean; // has the UniversalStore list been loaded
  error?: string | null; // last known error (if any)
}

export interface UniversalStorePartialState {
  readonly [UNIVERSAL_STORE_FEATURE_KEY]: UniversalStoreState;
}


export const initialUniversalStoreState: UniversalStoreState = {
  // set initial required properties
  text: '',
  loaded: false,
};

const reducer = createReducer(
  initialUniversalStoreState,
  on(UniversalStoreActions.initUniversalStore, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UniversalStoreActions.updateText, (state, {text}) => {
    debugger;
    return {
      ...state,
      text: text,
    };
  }),
  on(UniversalStoreActions.loadUniversalStoreFailure, (state, {error}) => ({
    ...state,
    error,
  })),
);

export function universalStoreReducer(
  state: UniversalStoreState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
