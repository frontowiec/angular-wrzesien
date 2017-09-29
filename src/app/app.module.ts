import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PlaylistsComponent} from './playlists/playlists.component';
import {PlaylistsListComponent} from './playlists/playlists-list.component';
import {PlaylistsDetailsComponent} from './playlists/playlists-details.component';
import {PlaylistsItemComponent} from './playlists/playlists-item.component';
import {HighlightDirective} from './playlists/highlight.directive';
import {ModalComponent} from './components/modal.component';
import {LifeCycleComponent} from './life-cycle.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {DynamicItemComponent} from './dynamic/dynamic-item.component';
import {MusicModule} from './music/music.module';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth/auth.service';
import {PlaylistResolve, routing} from './app.routing';
import {PlaylistContainerComponent} from './playlists/playlist-container.component';
import {PlaylistsService} from './playlists/playlists.service';
import {PlaylistGuardService} from './playlists/playlist-guard.service';
import { TestingComponent } from './testing.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    PlaylistsListComponent,
    PlaylistsDetailsComponent,
    PlaylistsItemComponent,
    HighlightDirective,
    ModalComponent,
    LifeCycleComponent,
    DynamicComponent,
    DynamicItemComponent,
    PlaylistContainerComponent
  ],
  entryComponents: [
    DynamicItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MusicModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    PlaylistsService,
    PlaylistResolve,
    PlaylistGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private auth: AuthService) {
  }
}
