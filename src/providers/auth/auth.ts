import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../../providers/settings/settings'


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  _apiUrl: string = environment.base_path;

  // Authorization requset //
  _auth = {
    login: this._apiUrl + environment.login,
    register: this._apiUrl + environment.register
  };

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello AuthProvider Provider');
  }

  // FOR AUTHORIZATION //
  tryLogin(username, password): any {

    localStorage.removeItem('userInfo');
    let data = {
      username: username,
      password: password,
    };

    return this.http.post(this._auth.login, data, this.settings._headerSettings);
  }

  doRegister(firstname, surname, email, username, password, password_confirmation, term_of_use) {
    let data = {
      name: firstname,
      surname: surname,
      email: email,
      username: username,
      password: password,
      password_confirmation: password_confirmation,
      term_of_use: term_of_use
    };

    console.log(data);

    return this.http.post(this._auth.register, data, this.settings._headerSettings);
  }
}
