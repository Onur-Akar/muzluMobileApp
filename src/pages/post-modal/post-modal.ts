import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { PostProvider } from '../../providers/post/post';
/**
 * Generated class for the PostModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-modal',
  templateUrl: 'post-modal.html',
})
export class PostModalPage {
  _myParam: string;
  _isPostSend: boolean = false;
  userPost: string;
  userPhoto: string;

  base64IMG: string = null;
  base64Img: string = null;
  videoUrl: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private postProvider: PostProvider) {
    let param = navParams.get('myParam');

    this._myParam = param;
    let userInfo = JSON.parse(localStorage.getItem('user_details'));
    this.userPhoto = userInfo.userPhoto;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostModalPage');
  }

  createPost() {
    let post = this.userPost;
    this.postProvider.createPost(null, 1, post, null, this.base64IMG, this.videoUrl).subscribe(res => {
      console.log(res);
      if (res['error_code'] == 0) {
        this._isPostSend = true;

        this.dismiss();
      }
    });
  }

  dismiss() {
    let data = {
      isSend: this._isPostSend
    }
    this.viewCtrl.dismiss(data);
  }

}
