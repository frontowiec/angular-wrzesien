import {RouterModule, Routes} from '@angular/router';
import {MusicSearchComponent} from './music-search.component';

const routes: Routes = [
  {
    path: 'music',
    component: MusicSearchComponent
  }
];

export const routing = RouterModule.forChild(routes);
