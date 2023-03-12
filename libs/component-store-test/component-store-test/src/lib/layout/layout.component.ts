import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {UniversalStoreFacade} from '@cabinet20/universal-state';

@Component({
  selector: 'nx-sandbox-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LayoutComponent {
  universalStoreFacade = inject(UniversalStoreFacade);
  // componentStore = inject(ComponentStoreStore);

  text$ = this.universalStoreFacade.text$;
  // someText$ = this.componentStore.someText$;
  //
  changeText(text:any) {
    this.universalStoreFacade.updateText(text.target.value as string);
  }
}
