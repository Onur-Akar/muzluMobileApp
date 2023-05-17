import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  _apiUrl: string = environment.base_path;

  // User request //
  _user = {
    user_from_username: this._apiUrl + environment.from_username,
    user_from_userid: this._apiUrl + environment.from_userid,
    profile_update: this._apiUrl + environment.profile_update,
    profile_details_update: this._apiUrl + environment.profile_details_update,
    change_password: this._apiUrl + environment.change_password,
    follow_unfollow: this._apiUrl + environment.follow_unfollow,
    user_feed: this._apiUrl + environment.user_feed,
    change_cover: this._apiUrl + environment.change_cover_photo,
    change_profile_photo: this._apiUrl + environment.change_profile_photo,
    follower_list: this._apiUrl + environment.get_followers,
    follow_list: this._apiUrl + environment.get_follows,
    follow_request_list: this._apiUrl + environment.follow_requests,
    follow_response: this._apiUrl + environment.response_request,
    notifications: this._apiUrl + environment.get_notifications,
    muz_transactions: this._apiUrl + environment.muz_transactions,
    muz_count: this._apiUrl + environment.muz_count,
    read_notification: this._apiUrl + environment.read_notification
  }

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello UserProvider Provider');
  }

  // FOR USER //
  getUserFromUsername(username) {
    let data = {
      username: username
    };

    return this.http.post(this._user.user_from_username, data, this.settings._headerSettingsWAuth);
  }

  getUserFromUserID(user_id) {
    let data = {
      user_id: user_id
    };

    return this.http.post(this._user.user_from_userid, data, this.settings._headerSettingsWAuth);
  }

  profileUpdate(name, surname, email, security) {
    let data = {
      name: name,
      surname: surname,
      email: email,
      security: security
    };

    return this.http.post(this._user.profile_update, data, this.settings._headerSettingsWAuth);
  }

  profileDetailsUpdate(short_desc, location, birthday_day, birthday_month, birthday_year, relation, sex, company, job, school, school_section, school_status) {
    let data = {
      short_desc: short_desc,
      location: location,
      birthday_day: birthday_day,
      birthday_month: birthday_month,
      birthday_year: birthday_year,
      relation: relation,
      sex: sex,
      company: company,
      job: job,
      school: school,
      school_section: school_section,
      school_status: school_status
    };

    return this.http.post(this._user.profile_details_update, data, this.settings._headerSettingsWAuth);
  }

  changePassword(old_password, password, password_confirm) {
    let data = {
      old_password: old_password,
      password: password,
      password_confirm: password_confirm
    };

    return this.http.post(this._user.change_password, data, this.settings._headerSettingsWAuth);
  }

  followUnfollow(user_id) {
    let data = {
      user_id: user_id
    };

    return this.http.post(this._user.follow_unfollow, data, this.settings._headerSettingsWAuth);
  }

  userFeed(filter, lastID, hashtag) {
    let data = {
      filter: filter,
      lastID: lastID,
      HashTag: hashtag
    };

    return this.http.post(this._user.user_feed, data, this.settings._headerSettingsWAuth);
  }

  changeCoverPhoto(cover_photo, cover_position) {
    let data = {
      cover_photo: cover_photo,
      cover_position: cover_position
    };

    return this.http.post(this._user.change_cover, data, this.settings._headerSettingsWAuth);
  }

  changePofilePhoto(page_id, profile_photo) {
    let data = {
      page_id: 5,
      profile_photo: profile_photo
    };

    return this.http.post(this._user.change_profile_photo, data, this.settings._headerSettingsWAuth);
  }

  getFollowers(user_id) {
    let data = {
      user_id: user_id
    };

    return this.http.post(this._user.follower_list, data, this.settings._headerSettingsWAuth);
  }

  getFollows(user_id) {
    let data = {
      user_id: user_id
    };

    return this.http.post(this._user.follow_list, data, this.settings._headerSettingsWAuth);
  }

  getFollowRequests() {
    return this.http.get(this._user.follow_request_list, this.settings._headerSettingsWAuth);
  }

  responseRequest(request_id, status) {
    let data = {
      request_id: request_id,
      status: status
    };

    return this.http.post(this._user.follow_response, data, this.settings._headerSettingsWAuth);
  }

  getNotifications(page?) {
    if (page) {
      return this.http.get(this._user.notifications + '?page=' + page, this.settings._headerSettingsWAuth);
    } else {
      return this.http.get(this._user.notifications, this.settings._headerSettingsWAuth);
    }
  }

  getMuzTransactions() {
    return this.http.get(this._user.muz_transactions, this.settings._headerSettingsWAuth);
  }

  getMuzCount() {
    return this.http.get(this._user.muz_count, this.settings._headerSettingsWAuth);
  }

  readNotification(notification_id) {
    let data = {
      notification_id: notification_id
    };

    return this.http.post(this._user.read_notification, data, this.settings._headerSettingsWAuth);
  }
}
