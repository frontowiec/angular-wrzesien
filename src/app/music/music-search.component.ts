import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-search',
  template: `
    <div class="row">
      <div class="col">
        <search-form></search-form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <albums-list></albums-list>
      </div>
    </div>
  `,
  styles: []
})
export class MusicSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
