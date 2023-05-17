import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { PostProvider } from '../../providers/post/post';
/**
 * Generated class for the ShareModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share-modal',
  templateUrl: 'share-modal.html',
})
export class ShareModalPage {
  _myParam: string;
  _isPostShare: boolean = false;
  postDetail: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private postProvider: PostProvider) {
    this._myParam = navParams.get('myParam');
    this.getPostDetail(this._myParam);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShareModalPage');
  }

  getPostDetail(post_id) {
    this.postProvider.getPostWithDetails(post_id).subscribe(res => {
      this.postDetail = res['data'];
    });
  }

  sharePost() {
    let post_id = this._myParam;

    this.postProvider.postShare(post_id).subscribe(res => {
      if (res['error_code'] == 0) {
        this._isPostShare = true;
      }
      console.log(res);

      this.dismiss();
    });
  }

  dismiss() {
    let data = {
      isSend: this._isPostShare
    };

    this.viewCtrl.dismiss(data);
  }
}
