import {Injectable} from '@angular/core';
import {RequestOptions, URLSearchParams} from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private requestOptions: RequestOptions) {
    this.requestOptions.headers.append(
      'Authorization', 'Bearer ' + this.getToken()
    );
  }

  getToken() {
    let token = window.localStorage.getItem('token');

    if (!token) {
      const match = window.location.hash.match(/#access_token=(.*?)&/);
      token = match && match[1];
    }
    if (!token) {
      this.authenticate();
    }
    window.localStorage.setItem('token', token);
    return token;
  }

  authenticate() {
    window.localStorage.removeItem('token');
    window.location.replace(' https://accounts.spotify.com/authorize?response_type=token&redirect_uri=http://localhost:4200&client_id=2ef12eb62e7c43bc868cf59c359ab1b4');
  }
}
