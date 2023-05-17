import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SettingsProvider {
  _headerSettings = {
    "async": true,
    "crossDomain": true,
    "headers": {
      "accept": "application/json"
    }
  }

  _headerSettingsWAuth = {
    "async": true,
    "crossDomain": true,
    "headers": {
      "accept": "application/json, text/plain, */*",
      'Content-Type': 'application/json',
      'Authorization': ''
    }
  }

  constructor(public http: HttpClient) {
    console.log('Hello SettingsProvider Provider');

    if (localStorage.getItem('user_details') != null) {
      let token = JSON.parse(localStorage.getItem('user_details')).api_token;

      this._headerSettingsWAuth.headers.Authorization = `Bearer ${token}`;
    }
  }

}
