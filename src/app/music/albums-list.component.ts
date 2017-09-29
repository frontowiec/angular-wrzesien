import {Component, OnInit} from '@angular/core';
import {MusicService} from './music.service';
import {Album} from './spotify';

@Component({
  selector: 'albums-list',
  template: `
    <div class="card-deck">
      <album-card class="card" *ngFor="let album of albums$ | async" [album]="album"></album-card>
    </div>
  `,
  styles: [
      `.card {
      flex: 1 1 25%;
      min-width: 25%;
      max-width: 25%;
    }`
  ]
})
export class AlbumsListComponent implements OnInit {
  albums: Album[] = [];
  albums$;

  constructor(private music: MusicService) {
  }

  ngOnInit() {
    this.albums$ = this.music.albums$;
    /*this.music.getAlbums()
      .subscribe((response: any) => {
        this.albums = response;
      });*/
  }

}
