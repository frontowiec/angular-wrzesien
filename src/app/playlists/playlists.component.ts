import {Component, OnInit} from '@angular/core';
import {Playlist} from './Playlist';
import {PlaylistsService} from './playlists.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'playlists',
  template: `
    <div class="row">
      <div class="col">
        <playlists-list [playlists]="playlists$ | async"
                        (selectedChange)="select($event)"
                        [selected]="selected$ | async"></playlists-list>
      </div>
      <div class="col">
        <!--<playlists-details *ngIf="selected; else message" [playlists]="selected"></playlists-details>-->
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class PlaylistsComponent implements OnInit {
  playlists$: Observable<Playlist[]>;
  selected$: Observable<Playlist>;

  constructor(private service: PlaylistsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.selected$ = this.route.firstChild.params
      .map(({id}) => parseInt(id))
      .switchMap(id => this.service.getPlaylist(id));

    this.playlists$ = this.service.getPlaylists();
  }

  select(playlist) {
    this.router.events.subscribe(event => console.log(event));
    this.router.navigate(['playlists', playlist.id]);
  }
}
