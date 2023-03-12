import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UniversalStoreActions from './universal-store.actions';
import * as UniversalStoreFeature from './universal-store.reducer';
import * as UniversalStoreSelectors from './universal-store.selectors';

@Injectable()
export class UniversalStoreFacade {
  private readonly store = inject(Store);
  loaded$ = this.store.pipe(
    select(UniversalStoreSelectors.selectUniversalStoreLoaded)
  );
  text$ = this.store.pipe(
    select(UniversalStoreSelectors.selectText)
  );

  init() {
    this.store.dispatch(UniversalStoreActions.initUniversalStore());
  }
  updateText(text: string) {
    this.store.dispatch(UniversalStoreActions.updateText({ text: text}));
  }
}
