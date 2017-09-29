import {Component, Input, OnInit} from '@angular/core';
import {Playlist} from './Playlist';

@Component({
  selector: 'playlists-details',
  template: `
    <div [hidden]="mode != 'show'">
      <div class="form-group">
        <label>Name:</label>
        <div class="form-control-static">{{playlists.name}}</div>
      </div>

      <div class="form-group">
        <div class="form-control-static" *ngIf="playlists.favorite">Favorite</div>
      </div>

      <div class="form-group">
        <label>Color:</label>
        <div class="form-control-static" [style.color]="playlists.color">{{playlists.color}}</div>
      </div>

      <button class="btn btn-success" (click)="edit()">Edit</button>
    </div>

    <div [hidden]="mode != 'edit'">
      <div class="form-control">
        <label>Name:</label>
        <input class="form-control" type="text" [(ngModel)]="playlists.name">
      </div>

      <div class="form-control">
        <label class="form-check-label">
          <input class="form-control-input" type="checkbox" [(ngModel)]="playlists.favorite">
          Favorite:</label>
      </div>

      <div class="form-control">
        <label>Color:</label>
        <input type="color" [(ngModel)]="playlists.color">
      </div>
      <button class="btn btn-success" (click)="save()">Save</button>
    </div>
  `,
  styles: []
})
export class PlaylistsDetailsComponent implements OnInit {

  mode: ('show' | 'edit') = 'show';

  @Input()
  playlists: Playlist;

  constructor() {
  }

  ngOnInit() {
  }

  save() {
    this.mode = 'show';
  }

  edit() {
    this.mode = 'edit';
  }

}
