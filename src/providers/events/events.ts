import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings'

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {
  _apiUrl: string = environment.base_path;

  // Event request //
  _event = {
    affiliate_events: this._apiUrl + environment.affiliate_events,
    affiliate_event: this._apiUrl + environment.affiliate_event,
    user_events: this._apiUrl + environment.user_events,
    user_event: this._apiUrl + environment.user_event,
    my_events: this._apiUrl + environment.my_events,
    invite_request: this._apiUrl + environment.invite_event,
    invite_response: this._apiUrl + environment.response_invite,
    create_event: this._apiUrl + environment.create_event,
    close_event: this._apiUrl + environment.close_event,
    event_photo_upload: this._apiUrl + environment.event_photo
  };

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello EventsProvider Provider');
  }

  // FOR EVENTS //
  getAffiliateEvents() {
    return this.http.post(this._event.affiliate_events, null, this.settings._headerSettingsWAuth);
  }

  getAffiliateEvent(event_id) {
    let data = {
      event_id: event_id
    };

    return this.http.post(this._event.affiliate_event, data, this.settings._headerSettingsWAuth);
  }

  getUserEvents() {
    return this.http.get(this._event.user_events, this.settings._headerSettingsWAuth);
  }

  getUserEvent(event_id) {
    let data = {
      event_id: event_id
    };

    return this.http.post(this._event.user_event, data, this.settings._headerSettingsWAuth);
  }

  getMyEvents() {
    return this.http.get(this._event.my_events, this.settings._headerSettingsWAuth);
  }

  inviteUserEvent(event_id, guests) {
    let data = {
      event_id: event_id,
      guests: guests
    };

    return this.http.post(this._event.invite_request, data, this.settings._headerSettingsWAuth);
  }

  inviteResponse(event_id, status) {
    let data = {
      event_id: event_id,
      status: status
    };

    return this.http.post(this._event.invite_response, data, this.settings._headerSettingsWAuth);
  }

  createEvent(title, date, time, etype, address, finished_date, finished_time, description, cover_photo) {
    let data = {
      title: title,
      date: date,
      time: time,
      type: etype,
      address: address,
      finished_date: finished_date,
      finished_time: finished_time,
      description: description,
      cover_photo: cover_photo
    };

    return this.http.post(this._event.create_event, data, this.settings._headerSettingsWAuth);
  }

  closeEvent(event_id) {
    let data = {
      event_id: event_id
    };

    return this.http.post(this._event.close_event, data, this.settings._headerSettingsWAuth);
  }

  eventPhotoUpload(event_id, event_photo) {
    let data = {
      event_id: event_id,
      event_photo: event_photo
    };

    return this.http.post(this._event.event_photo_upload, data, this.settings._headerSettingsWAuth);
  }

}
