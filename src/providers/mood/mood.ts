import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings';

/*
  Generated class for the MoodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoodProvider {
  _apiUrl: string = environment.base_path;

  // Mood request //
  _mood = {
    muzlu_all_mood: this._apiUrl + environment.all_mood,
    user_mood: this._apiUrl + environment.user_mood,
    active_moods: this._apiUrl + environment.active_mood
  };
  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello MoodProvider Provider');
  }

  // FOR MOOD //
  getMuzluAllMood() {
    return this.http.get(this._mood.muzlu_all_mood, this.settings._headerSettingsWAuth);
  }

  getUserMood(user_id) {
    let data = {
      user_id: user_id
    };

    return this.http.post(this._mood.user_mood, data, this.settings._headerSettingsWAuth);
  }

  getActiveMoods() {
    return this.http.get(this._mood.active_moods, this.settings._headerSettingsWAuth);
  }
}
