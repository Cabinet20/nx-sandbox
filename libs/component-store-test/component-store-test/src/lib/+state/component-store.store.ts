import {inject, Injectable} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {UniversalStoreFacade} from '@cabinet20/universal-state';
import {Observable, tap} from 'rxjs';

export interface ComponentStoreState {
  someText: string
};

const initialState: ComponentStoreState = {
  someText: 'placeholder',
};

@Injectable()
export class ComponentStoreStore extends ComponentStore<ComponentStoreState> {
  universalStoreFacade = inject(UniversalStoreFacade);

  readonly someText$ = this.select(({ someText }) => someText);

  readonly setSomeText = this.updater(
    (state, text?: string) => {
      return {
        ...state,
        someText: text ?? '',
      };
    },
  );

  readonly updateStore = this.effect(
    (text$: Observable<string>) =>
      text$.pipe(
        tap(text => {
          this.setSomeText(text);
          debugger;
          this.universalStoreFacade.updateText(`${text} updated`)
        }),
      )
  );

  constructor() {
    super(initialState);
    this.universalStoreFacade.text$.subscribe(text => {
      debugger;
    })
  }


}
