import {Component, Input, OnInit} from '@angular/core';
import {Album} from './spotify';

@Component({
  selector: 'album-card',
  template: `
    <img [src]="album.images[1].url" >
    <div class="card-block">
      <input type="range" min="0" max="30" value="30" (input)="value = $event.target.value">
      <h4 class="card-title">{{album.name | shorten : value}}</h4>
    </div>
  `,
  styles: []
})
export class AlbumCardComponent implements OnInit {
  @Input()
  album: Album;

  constructor() { }

  ngOnInit() {
  }

}
