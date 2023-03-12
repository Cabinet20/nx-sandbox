import * as UniversalStoreActions from './lib/+state/universal-store/universal-store.actions';

import * as UniversalStoreFeature from './lib/+state/universal-store/universal-store.reducer';

import * as UniversalStoreSelectors from './lib/+state/universal-store/universal-store.selectors';

export * from './lib/+state/universal-store/universal-store.facade';

export {
  UniversalStoreActions,
  UniversalStoreFeature,
  UniversalStoreSelectors,
};
export * from './lib/universal-data-shared-data-access.module';
