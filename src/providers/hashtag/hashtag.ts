import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings';
/*
  Generated class for the HashtagProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HashtagProvider {
  _apiUrl: string = environment.base_path;

  // HashTag request //
  _hashtag = {
    daily_trend: this._apiUrl + environment.trend_daily
  };

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello HashtagProvider Provider');
  }

  // FOR HASHTAG //
  getTrendDaily() {
    return this.http.get(this._hashtag.daily_trend, this.settings._headerSettingsWAuth);
  }
}