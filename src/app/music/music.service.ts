import {Injectable} from '@angular/core';
import {Album} from './spotify';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Http} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class MusicService {
  // albums: Album[] = [];
  albums$ = new BehaviorSubject<Album[]>([]);
  queries$ = new BehaviorSubject<string>('batman');

  constructor(private http: Http) {
    this.queries$
      .map(query => `https://api.spotify.com/v1/search?type=album&query=${query}`)
      .switchMap(url => this.http.get(url))
      .map((response: any) => {
        const data = response.json();
        return <Album[]> data.albums.items;
      })
      .subscribe(albums => {
        this.albums$.next(albums);
      });
  }

  search(query) {
    this.queries$.next(query);
  }

  getAlbums() {
    return this.albums$.asObservable();
  }
}
