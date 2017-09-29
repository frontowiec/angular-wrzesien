import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchFormComponent} from './search-form.component';
import {AlbumsListComponent} from './albums-list.component';
import {AlbumCardComponent} from './album-card.component';
import {MusicSearchComponent} from './music-search.component';
import {MusicService} from './music.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './music.routing';
import {ShortenPipe} from './shorten.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [SearchFormComponent, AlbumsListComponent, AlbumCardComponent, MusicSearchComponent, ShortenPipe],
  exports: [
    MusicSearchComponent
  ],
  providers: [
    MusicService
  ]
})
export class MusicModule {
}
