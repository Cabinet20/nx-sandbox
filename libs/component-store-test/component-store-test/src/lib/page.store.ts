import {inject, Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {UniversalStoreFacade} from '@cabinet20/universal-state';
import {Observable, skip, tap} from 'rxjs';

export interface PageState {
  someText: string
}

const initialState: PageState = {
  someText: 'No value set yet',
};

@Injectable()
export class PageStore extends ComponentStore<PageState> {
  universalStoreFacade = inject(UniversalStoreFacade);
  readonly someText$ = this.select(({someText}) => someText);

  constructor() {
    super(initialState);
    this.universalStoreFacade.text$
      .pipe(skip(1))
      .subscribe(newText => {
        console.log(newText);
        this.updateStore(`NEW TEXT [${newText}]`);
      })
  }

  readonly setSomeText = this.updater(
    (state, text: string) => {
      return {
        ...state,
        someText: text,
      };
    },
  );

  readonly updateStore = this.effect(
    (text$: Observable<string>) =>
      text$.pipe(
        tap(text => {
          this.setSomeText(text);
        }),
      ),
  );
}
