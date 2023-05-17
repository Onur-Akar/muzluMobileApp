import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {
  _apiUrl: string = environment.base_path;

  // Search request //
  _search = {
    search_user: this._apiUrl + environment.search_user,
  };
  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello SearchProvider Provider');
  }

  // FOR SEARCH //
  searchUser(query) {
    let data = {
      query: query
    };

    return this.http.post(this._search.search_user, data, this.settings._headerSettingsWAuth);
  }

}
