import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ActionSheetController } from "ionic-angular";

import { PostProvider } from '../../providers/post/post';
import { UserProvider } from '../../providers/user/user';

import { PostModalPage } from '../post-modal/post-modal';
import { CommentModalPage } from '../comment-modal/comment-modal';
import { ShareModalPage } from '../share-modal/share-modal';
import { NotificationModalPage } from '../notification-modal/notification-modal';
import { MuzmojiModalPage } from '../muzmoji-modal/muzmoji-modal';
import { AppOptionsModalPage } from '../app-options-modal/app-options-modal';
import { MorePostOptModalPage } from '../more-post-opt-modal/more-post-opt-modal';
import { FilterModalPage } from '../filter-modal/filter-modal';

import { UserProfilePage } from '../user-profile/user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  quotes: any[] = [];
  userPost: string;
  userFastComment: any[] = [];
  myself: any[];
  userMuz: any[];
  result: [{
    data: any,

  }]
  data: any[];
  userPhoto: any[];
  quote;
  likeCount;
  comment_idx: number;
  share_idx: number;
  notifyCount: number;

  lastPostID: string = null;
  postFilter: string = '';
  postHashtag: string = null;

  noMorePost: boolean = false;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private postProvider: PostProvider, private userProvider: UserProvider, private actionSheetCtrl: ActionSheetController) {
    let current_page = localStorage.getItem('current_page');
    if (current_page) {
      this.navCtrl.push(current_page);
    }
    this.getNotifyCount();

    this.loadPosts();

    this.loadUserInfo();
  }
  //Caller type is which function type call this func doInfinite or others 'type = 0' means other func 'type = 1' doInfiite
  loadPosts(infiniteScroll?, refresher?) {
    this.postProvider.getPosts(this.postFilter, this.lastPostID, this.postHashtag)
      .subscribe(res => {
        let newData = Object.keys(res['data']).map(key => res['data'][key]);

        if (!infiniteScroll) {
          this.quotes = newData;
        } else {
          this.quotes = this.quotes.concat(newData);
        }

        if (newData.length > 0) {
          this.lastPostID = newData[newData.length - 1]._id;
        } else {
          this.noMorePost = true;
          infiniteScroll.enable(false);
        }

        if (infiniteScroll) {
          infiniteScroll.complete();
        } else if (refresher) {
          refresher.complete();
        }

        console.log("Success : " + res['data']);
      },
        err => {
          console.error("Error : " + err);
        },
        () => {
          console.log('getData completed');
        }
      );
  }

  loadUserInfo() {
    this.userProvider.getUserFromUsername(JSON.parse(localStorage.getItem('user_details')).username).subscribe(result => {
      this.userMuz = result['data'].muz;
      this.userPhoto = result['data'].details.profile_photo.photo_path;

      let userInfo = JSON.parse(localStorage.getItem('user_details'));
      userInfo.userPhoto = this.userPhoto;
      localStorage.setItem('user_details', JSON.stringify(userInfo));
    });
  }

  getNotifyCount() {
    this.userProvider.getNotifications().subscribe(res => {
      let count = res['unread_count'];

      this.notifyCount = count;
    });
  }

  likePost(post_id, idx) {
    let id = post_id;
    this.postProvider.likePost(id).subscribe(res => {

      if (res['like'] == 1) {
        this.quotes[idx].count.like++;
        this.quotes[idx].like_me = 'liked';
      } else {
        this.quotes[idx].count.like--;
        this.quotes[idx].like_me = null;
      }
    });
  }

  sendPostComment(post_id, idx) {
    let id = post_id;
    let commentText = this.userFastComment[idx];
    this.userFastComment[idx] = null;
    this.postProvider.commentPostCreate(id, commentText).subscribe(res => {
      console.log(res);
      let lastComment = res['data']
      this.quotes[idx].fast_comment = lastComment;
    });
  }

  openPostModal(postType) {
    let postModal = this.modalCtrl.create(PostModalPage, { 'myParam': postType });

    postModal.onDidDismiss(data => {
      console.log(data);

      if (data != null && data.isSend) {
        this.loadPosts();
      }
    });

    postModal.present();
  }

  openMorePostOptModal() {
    let moreOptModal = this.modalCtrl.create(MorePostOptModalPage);

    moreOptModal.onDidDismiss(data => {
      if (data.postType) {
        this.openPostModal(data.postType);
      }
    });

    moreOptModal.present();
  }

  openCommentModal(post_id, idx) {
    this.comment_idx = idx;
    let cmModal = this.modalCtrl.create(CommentModalPage, { 'myParam': post_id });

    cmModal.onDidDismiss(data => {
      this.commentStatusChecker(data.isSend);
    });

    cmModal.present();
  }

  commentStatusChecker(status) {
    if (status) {
      this.quotes[this.comment_idx].count.comment++;
    }
  }

  openShareModal(post_id, idx) {
    this.share_idx = idx;

    let shareModal = this.modalCtrl.create(ShareModalPage, { 'myParam': post_id });

    shareModal.onDidDismiss(data => {
      console.log(data);

      if (data.isSend) {
        this.loadPosts();
      }
    });

    shareModal.present();
  }

  openNotifyModal() {
    let notifyModal = this.modalCtrl.create(NotificationModalPage);

    notifyModal.present();
  }

  openFilterModal() {
    let filterModal = this.modalCtrl.create(FilterModalPage);

    filterModal.onDidDismiss(data => {
      if (data.filter != null) {
        this.postFilter = data.filter;

        this.loadPosts();
      }
    });

    filterModal.present();
  }

  openSheetControllerForMuzHedefimarrowIcon() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Muz hedefim',
      buttons: [
        {
          text: 'Seçenek1',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Seçenek2',
          handler: () => {
            alert("secenek2");
          }
        },
        {
          text: "ddd",
          handler: () => {
            console.log("dd")
          }
        },
        {
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

  openModalMuzMoji() {
    let modalMuzmoji = this.modalCtrl.create(MuzmojiModalPage, {});

    modalMuzmoji.onDidDismiss((data) => {
      console.log(data);
    });

    modalMuzmoji.present();
  }

  doRefresh(refresher) {
    this.loadPosts(null, refresher);
  }

  loadMoreFeed(infiniteScroll) {
    this.loadPosts(infiniteScroll);
  }

  presentUserOptions() {
    let userOptionsModal = this.modalCtrl.create(AppOptionsModalPage);

    userOptionsModal.onDidDismiss(data => {

    });

    userOptionsModal.present();
  }

  goProfilePage() {
    this.navCtrl.push(UserProfilePage);
  }

}
