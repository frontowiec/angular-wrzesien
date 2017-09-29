import {Injectable} from '@angular/core';
import {Playlist} from './Playlist';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PlaylistsService {
  playlists: Playlist[] = [
    {
      id: 0,
      name: 'Plebania',
      favorite: true,
      color: '#523fff'
    },
    {
      id: 1,
      name: 'M jak miłość',
      favorite: true,
      color: '#ff46bb'
    },
    {
      id: 2,
      name: 'Złotopolscy',
      favorite: false,
      color: '#99921c'
    }
  ];

  constructor() {
  }

  getPlaylist(id) {
    return Observable.of(this.playlists.find(playlist => playlist.id === id));
  }

  getPlaylists() {
    return Observable.of(this.playlists);
  }
}
