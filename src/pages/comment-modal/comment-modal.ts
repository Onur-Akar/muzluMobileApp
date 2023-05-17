import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ActionSheetController } from "ionic-angular";

import { PostProvider } from '../../providers/post/post';

/**
 * Generated class for the CommentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment-modal',
  templateUrl: 'comment-modal.html',
})
export class CommentModalPage {
  _myParam: string;
  _isCommentSend: boolean = false;

  postDetail: object;
  postComments: any[] = [];

  nextPage: number = 1;
  lastPage: number = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private postProvider: PostProvider, public actionSheetCtrl: ActionSheetController) {
    let param = navParams.get('myParam');

    this._myParam = param;

    this.getPostDetail(this._myParam);
    this.loadPostComments(this._myParam, null, this.nextPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentModalPage');
  }

  dismiss() {
    let data = {
      isSend: this._isCommentSend
    }
    this.viewCtrl.dismiss(data);
  }

  sendComment(comment) {
    let text = comment;
    this.postProvider.commentPostCreate(this._myParam, text).subscribe(res => {
      console.log(res);
      if (res['error_code'] == 0) {
        this._isCommentSend = true;

        this.dismiss();
      }
    });
  }

  getPostDetail(post_id) {
    this.postProvider.getPostWithDetails(post_id).subscribe(res => {
      if (res['error_code'] == 0) {
        this.postDetail = res['data'];
      }
    });
  }

  loadPostComments(post_id, infiniteScroll?, nextPage?) {
    this.postProvider.loadComments(post_id, nextPage).subscribe(res => {
      if (res['error_code'] == 0) {
        let withPage = res['withPage'];

        if (this.nextPage == 1) {
          this.lastPage = withPage.last_page;
        }

        if (infiniteScroll && (this.lastPage == withPage.current_page)) {
          infiniteScroll.enable(false);
        }

        let data = res['data'] != null ? Object.keys(res['data']).map(key => res['data'][key]) : [];

        if (infiniteScroll) {
          this.postComments = this.postComments.concat(data);
        } else {
          this.postComments = data;
        }

        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      }
    });
  }

  openMoreDropMenu(id) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Bu yorumu ne yapalım',
      buttons: [
        {
          text: 'Bunu gizle',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Bunu rapor et',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'İptal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  loadMoreComment(infiniteScroll) {
    this.nextPage++;
    this.loadPostComments(this._myParam, infiniteScroll, this.nextPage);
  }

}
