import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Playlist} from './Playlist';

@Component({
  selector: 'playlists-list',
  template: `
    <div class="list-group">
      <div class="list-group-item"
           *ngFor="let playlist of playlists; let i = index;"
           [class.active]="playlist == selected"
           [highlight]="playlist.color"
           (click)="select(playlist)">
        {{i + 1 + '. '}}{{playlist.name}}
      </div>
    </div>
  `,
  styles: [
      `.list-group-item {
      border-left: 15px solid black
    }`
  ]
})
export class PlaylistsListComponent implements OnInit {
  @Input()
  playlists: Playlist[];

  @Input()
  selected;

  @Output()
  selectedChange = new EventEmitter<Playlist>();

  select(playlist) {
    this.selectedChange.emit(playlist);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
