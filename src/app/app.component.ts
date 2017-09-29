import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <nav class="navbar navbar-expand navbar-light bg-faded">
      <div class="container">
        <a class="navbar-brand" href="#">{{title}}</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" routerLink="playlists" routerLinkActive="active">My Music <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="music" routerLinkActive="active">Search</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="row">
        <div class="col">
          <h1>Welcome to {{title}}</h1>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Wrzesień';
  show = false;
  complex = {
    message: ''
  };
}
