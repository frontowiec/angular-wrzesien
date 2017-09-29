import {Component, OnInit} from '@angular/core';
import {PlaylistsService} from './playlists.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Playlist} from './Playlist';
import 'rxjs/add/operator/pluck';

@Component({
  selector: 'playlist-container',
  template: `
    <playlists-details
      *ngIf="(playlists$ | async) as playlist"
      [playlists]="playlist">
    </playlists-details>
    <ng-template [ngIf]="!playlist">Please select a playlist</ng-template>
  `,
  styles: []
})
export class PlaylistContainerComponent implements OnInit {
  playlists$: Observable<Playlist>;

  constructor(private service: PlaylistsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.playlists$ =  this.route.data.pluck('playlist');
  }

}
