import {Component, inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { PageStore } from '../page.store';

@Component({
  selector: 'nx-sandbox-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [PageStore],
})
export class PageComponent implements OnInit, OnDestroy{
  pageStore = inject(PageStore);
  someText$ = this.pageStore.someText$;

  ngOnInit() {
    console.log('Entering PageComponent');
  }

  ngOnDestroy() {
    console.log('Leaving PageComponent');
  }
}
