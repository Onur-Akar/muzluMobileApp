import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the NotificationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification-modal',
  templateUrl: 'notification-modal.html',
})
export class NotificationModalPage {
  notifies: any[] = [];
  page: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private userProvider: UserProvider) {
    this.getNotify();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationModalPage');
  }

  getNotify(infiniteScroll?) {
    let pgCount: number = null
    if (this.page > 1) {
      pgCount = this.page;
    }
    this.userProvider.getNotifications(pgCount).subscribe(res => {
      this.notifies = this.notifies.concat(res['data'].data);

      if (infiniteScroll) {
        infiniteScroll.complete();
      }
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadMoreNotify(infiniteScroll) {
    this.page++;
    this.getNotify(infiniteScroll);
  }
}
