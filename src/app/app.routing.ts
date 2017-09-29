import {ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';
import {PlaylistsComponent} from './playlists/playlists.component';
import {PlaylistContainerComponent} from './playlists/playlist-container.component';
import {Playlist} from './playlists/Playlist';
import {Injectable} from '@angular/core';
import {PlaylistsService} from './playlists/playlists.service';
import {PlaylistGuardService} from "./playlists/playlist-guard.service";

@Injectable()
export class PlaylistResolve implements Resolve<Playlist> {
  constructor(private service: PlaylistsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getPlaylist(parseInt(route.params.id));
  }
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'playlists',
    pathMatch: 'full'
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
    children: [
      {
        path: '', component: PlaylistContainerComponent
      },
      {
        path: ':id', component: PlaylistContainerComponent,
        data: {title: 'Playlist Details'},
        resolve: {
          playlist: PlaylistResolve
        },
        canActivate: [PlaylistGuardService]
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes, {
  // enableTracing: true,
  // useHash: true
});
