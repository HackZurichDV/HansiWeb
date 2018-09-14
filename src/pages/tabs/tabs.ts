import { Component } from '@angular/core';

import { AlternativesPage } from '../alternatives/alternatives';
import { RatingPage } from '../rating/rating';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListPage;
  tab2Root = AlternativesPage;
  tab3Root = RatingPage;

  constructor() {

  }
}
