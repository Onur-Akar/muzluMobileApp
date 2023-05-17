import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings';

/*
  Generated class for the PagessProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PagessProvider {
  _apiUrl: string = environment.base_path;

  // Pages request //
  _page = {
    page_list: this._apiUrl + environment.get_pages,
    page_follow: this._apiUrl + environment.page_follow,
    page: this._apiUrl + environment.get_page,
    create_page: this._apiUrl + environment.create_page,
    update_page_detail: this._apiUrl + environment.update_page,
    update_page_cover: this._apiUrl + environment.cover_photo,
    update_page_profile_photo: this._apiUrl + environment.profile_photo,
    page_feed: this._apiUrl + environment.page_feed,
    create_page_post: this._apiUrl + environment.post_for_page,
    page_post_like: this._apiUrl + environment.page_post_like,
    page_post_comment: this._apiUrl + environment.page_post_comment,
    page_post_share: this._apiUrl + environment.page_post_share,
    page_post: this._apiUrl + environment.page_post,
    load_page_comments: this._apiUrl + environment.load_comments_page
  };

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello PagessProvider Provider');
  }

  // FOR PAGES //
  getPages(order = null, category_id = null) {
    let data = {
      order: order,
      category_id: category_id
    };

    return this.http.post(this._page.page_list, data, this.settings._headerSettingsWAuth);
  }

  pageFollow(page_id) {
    let data = {
      page_id: page_id
    };

    return this.http.post(this._page.page_follow, data, this.settings._headerSettingsWAuth);
  }

  getPage(page_id) {
    let data = {
      page_id: page_id
    };

    return this.http.post(this._page.page, data, this.settings._headerSettingsWAuth);
  }

  createPage(page_name, page_category, name) {
    let data = {
      page_name: page_name,
      page_category: page_category,
      name: name
    };

    return this.http.post(this._page.create_page, data, this.settings._headerSettingsWAuth);
  }

  updatePageDetail(page_id, page_description, web_site, email) {
    let data = {
      page_id: page_id,
      page_description: page_description,
      web_site: web_site,
      email: email
    };

    return this.http.post(this._page.update_page_detail, data, this.settings._headerSettingsWAuth);
  }

  updateCoverPhotoForPage(page_id, cover_photo, cover_position) {
    let data = {
      page_id: page_id,
      cover_photo: cover_photo,
      cover_position: cover_position
    };

    return this.http.post(this._page.update_page_cover, data, this.settings._headerSettingsWAuth);
  }

  updateProfilePhotoForPage(page_id, profile_photo) {
    let data = {
      page_id: page_id,
      profile_photo: profile_photo
    };

    return this.http.post(this._page.update_page_profile_photo, data, this.settings._headerSettingsWAuth);
  }

  getFeedForPage(page_id, filter, lastID) {
    let data = {
      page_id: page_id,
      filter: filter,
      lastID: lastID
    };

    return this.http.post(this._page.page_feed, data, this.settings._headerSettingsWAuth);
  }

  postCreateForPage(page_id, mood, text, location, photo, video) {
    let data = {
      page_id: page_id,
      mood: mood,
      text: text,
      location: location,
      photo: photo,
      video: video
    };

    return this.http.post(this._page.create_page_post, data, this.settings._headerSettingsWAuth);
  }

  pagePostLike(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._page.page_post_like, data, this.settings._headerSettingsWAuth);
  }

  pagePostComment(post_id, comment) {
    let data = {
      post_id: post_id,
      comment: comment
    };

    return this.http.post(this._page.page_post_comment, data, this.settings._headerSettingsWAuth);
  }

  pagePostShare(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._page.page_post_share, data, this.settings._headerSettingsWAuth);
  }

  getPagePost(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._page.page_post, data, this.settings._headerSettingsWAuth);
  }

  loadCommentsForPage(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._page.load_page_comments, data, this.settings._headerSettingsWAuth);
  }

}
