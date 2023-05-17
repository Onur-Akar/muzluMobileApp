import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environment';
import { SettingsProvider } from '../settings/settings'

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
  _apiUrl: string = environment.base_path;

  // Post request //
  _post = {
    post_list: this._apiUrl + environment.get_post,
    create_post: this._apiUrl + environment.create_post,
    delete_post: this._apiUrl + environment.delete_post,
    like_post: this._apiUrl + environment.like_post,
    comment_like: this._apiUrl + environment.comment_like,
    comment_post_create: this._apiUrl + environment.comment_post_create,
    comment_post_delete: this._apiUrl + environment.comment_post_delete,
    post_share: this._apiUrl + environment.post_share,
    post_details: this._apiUrl + environment.post_with_details,
    load_comments: this._apiUrl + environment.load_comments,
    post_likes: this._apiUrl + environment.post_likes
  };

  constructor(public http: HttpClient, private settings: SettingsProvider) {
    console.log('Hello PostProvider Provider');
  }

  // FOR POST //
  getPosts(filter?, lastID?, hashtag?) {
    let data = {
      "filter": filter,
      "HashTag": hashtag
    };

    if (lastID != null)
      data["lastID"] = lastID;

    return this.http.post(this._post.post_list, data, this.settings._headerSettingsWAuth); ////////////////////////////
  }

  createPost(page_id = null, mood = null, text, location = null, photo = null, video = null) {
    let data = {
      page_id: page_id,
      mood: mood,
      text: text,
      location: location,
      photo: photo,
      video: video
    };

    return this.http.post(this._post.create_post, data, this.settings._headerSettingsWAuth); ///////////////////////////
  }

  deletePost(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._post.delete_post, data, this.settings._headerSettingsWAuth);
  }

  likePost(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._post.like_post, data, this.settings._headerSettingsWAuth); ///////////////////////////
  }

  commentLike(comment_id) {
    let data = {
      comment_id: comment_id
    };

    return this.http.post(this._post.comment_like, data, this.settings._headerSettingsWAuth);
  }

  commentPostCreate(post_id, comment) {
    let data = {
      post_id: post_id,
      comment: comment
    };

    return this.http.post(this._post.comment_post_create, data, this.settings._headerSettingsWAuth);
  }

  commentPostDelete(post_id) {
    let data = {
      post_id: post_id
    };
    return this.http.post(this._post.comment_post_delete, data, this.settings._headerSettingsWAuth);
  }

  postShare(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._post.post_share, data, this.settings._headerSettingsWAuth); ////////////////////////////
  }

  getPostWithDetails(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._post.post_details, data, this.settings._headerSettingsWAuth);
  }

  loadComments(post_id, page?) {
    let data = {
      post_id: post_id
    };

    if (page) {
      return this.http.post(this._post.load_comments + '?page=' + page, data, this.settings._headerSettingsWAuth);
    } else {
      return this.http.post(this._post.load_comments, data, this.settings._headerSettingsWAuth);
    }
  }

  postLikes(post_id) {
    let data = {
      post_id: post_id
    };

    return this.http.post(this._post.post_likes, data, this.settings._headerSettingsWAuth);
  }

}