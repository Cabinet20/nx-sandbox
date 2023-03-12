import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UniversalStoreActions from './universal-store.actions';
import * as UniversalStoreFeature from './universal-store.reducer';

import { switchMap, catchError, of } from 'rxjs';

@Injectable()
export class UniversalStoreEffects {
  private actions$ = inject(Actions);

  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UniversalStoreActions.initUniversalStore),
  //     switchMap(() =>
  //       of(
  //         UniversalStoreActions.loadUniversalStoreSuccess({
  //           updatedText: '',
  //         })
  //       )
  //     ),
  //     catchError((error) => {
  //       console.error('Error', error);
  //       return of(UniversalStoreActions.loadUniversalStoreFailure({ error }));
  //     })
  //   )
  // );
}
